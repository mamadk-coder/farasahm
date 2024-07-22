import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { setCookie } from '../component/cookie';
import { onrun } from './confing';
import { useNavigate } from 'react-router-dom';

const Loginn = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [otp, setOtp] = useState('');
  const [imgCaptcha, setImgCaptch] = useState(null);
  const [CaptchaCode, setCaptchaCode] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const getCaptua = () => {
    axios.post(onrun + '/captcha')
      .then((response) => {
        setImgCaptch(response.data.image);
        setCaptchaCode(response.data.encrypted_response);
      });
  };

  const submit = () => {
    if (phone.length !== 11) {
      setErrMsg('شماره همراه میبایست 11 رقم باشد');
      alert('phone');
    } else if (code.length !== 4) {
      setErrMsg('کد تصویر صحیح نیست');
      alert('code');
    } else {
      let inputPhone = { phone: phone, captcha: code, code: '' };
      axios.post(onrun + '/applyphone', { inputPhone: inputPhone, captchaCode: CaptchaCode })
        .then((response) => {
          if (response.data.replay) {
            setStep(2);
            setErrMsg('');
          } else {
            setErrMsg(response.data.msg);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const login = () => {
    let inputPhone = { phone: phone, captcha: code, code: otp };

    axios.post(onrun + '/applycode', { inputPhone: inputPhone })
      .then((response) => {
        if (response.data.replay) {
          setCookie('id', response.data.id, 10);
          navigate('/desk');
        } else {
          setErrMsg(response.data.msg);
          setErrMsg('کد وارد شده صحیح نمیباشد');
        }
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (step === 1) {
        submit();
      } else if (step === 2) {
        login();
      }
    }
  };

  useEffect(getCaptua, []);

  return (
    <div className="App flex items-end mt-40 ml-36" onKeyDown={handleKeyPress}>
      <div className='asl'>
        <div className="flex justify-center">
          <div className="w-full bg-blue-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border-4 border-indigo-500/100 border-solid border-2 border-indigo-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mr-10">
              {step === 2 ? (
                <>
                  <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='کد تایید' type='phone' />
                  <div className='column flex flex-col'>
                    <button id='confirmButton' className='ent text-gray-200 focus:border bg-blue-600 rounded w-16 h-9 ml-16' onClick={login}>تایید</button>
                    {errMsg && <p className="text-red-700">{errMsg}</p>}
                    <button className='btnEdt mt-3 text-blue-700' onClick={() => setStep(1)}>ویرایش</button>
                  </div>
                </>
              ) : (
                <>
                  <input className="flex flex-col ml-14 items-center rounded-lg" placeholder="شماره همراه" type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                  />
                  <input id='myInput' className="flex flex-col items-center ml-14 rounded-lg" placeholder="کد تصویر"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                  />
                  <div className="w-44 ml-16 rounded-lg">
                    {imgCaptcha && <img onClick={getCaptua} src={`data:image/png;base64,${imgCaptcha}`} alt="captcha" />}
                  </div>
                  <button className="text-gray-200 focus:border bg-blue-600 rounded w-16 h-9" onClick={submit}>
                    تایید
                  </button>
                  {errMsg && <p className="text-red-700">{errMsg}</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="columns-1 ml-80">
        <img src='fidiptype.png' alt="logo" />
        <p className="text-gray-200 focus:border bg-blue-600 rounded w-30 h-15">سامانه مدیریت امور سهام</p>
        <a href='#' className="text-blue-600">www.fidip.ir</a>
      </div>
    </div>
  );
};

export default Loginn;
