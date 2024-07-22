import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const Navigate = useNavigate()

  const login = () => {

    Navigate('/login');
  };
  const desk = () => {
    Navigate('/desk');
  };


  return (
    <div>



      <div className='bala bg-blue-800 h-16'>
        <div className='text-white flex flex-col float-right mr-12'> 

        <a dir="rtl" className='text-white flex flex-col float-right  '>
          میز کارگزاری ایساتیس پویا

          <a className='flex justify-center'>

          کارگزاری
          </a>
        </a>
        </div>

        <div className="flex justify-items-end text-white ">

          <button className="mt-4 ml-2" onClick={login}>
            home
          </button>
          <button className="ml-8 mt-4" onClick={desk}>
            exit
          </button>

        </div>

      </div>
      <div className='  flex flex-col float-right mr-9 text-blue-800' >
        <p className=' bg-blue-200 h-6'> منو</p>

        <button className="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">گزیده</button>
        <ul>
          <li className='py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded'> <a> معامله گران </a>
            <ul className=''>
              <li>کل</li>
              <li>کارگزاری</li>
            </ul>
            </li>
        </ul>

        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">تازه وارد</button>
        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">خارج شده</button>
        <ul className='fub'>
        <li class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">سهام داران
<ul className='sub'>
<li>سهامداران</li>
<li>رسوبی</li>
  </ul>
  </li>
        </ul>
        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">گروه بندی</button>
        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">کارگزاری ها</button>
        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">متریک ها</button>
        <button class="py-1 mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-200 rounded">ایجاد مجمع</button>
      </div>
      <div className='h-6 bg-blue-200'>
        گزیده
      </div>

    </div>

  );
};

export default Dashboard;
