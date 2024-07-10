import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import axios from 'axios';
import React, { useState } from 'react';



function App() {
  const [phone, setPhone] = useState('');
  const sub= () => {
    console.log(phone);
  };





    return (



  <div className="App flex items-end   mt-40 ml-36">
    <div className='asl'>
      <h1>

      </h1>
      <div className="flex justify-center ...">
        <div className="w-full bg-blue-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border-4 border-indigo-500/100 border-solid border-2 border-indigo-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mr-10" >

            <input class="flex flex-col ml-14 items-center rounded-lg" placeholder="شماره همراه" type="tel"
              value={phone}
              onChange={e=>setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
             ></input>
            <input class="flex flex-col items-center ml-14 rounded-lg " placeholder="کد تصویر"  ></input>
            <div className="w-44 ml-16 rounded-lg">

              <img src='captua.png' />
            </div>
    

            <button class="text-gray-200 focus:border bg-blue-600 rounded w-16 h-9"  onClick={sub}> 
              تایید
              </button>
            

          </div>
        </div>
      </div>
    </div>
    <div class="columns-1 ml-80">

      <img src='fidiptype.png' />
      <p class=" text-gray-200 focus:border bg-blue-600 rounded w-30 h-15 "  > سامانه مدیریت امور سهام</p>
      <a href='#' class="text-blue-600  ">www.fidip.ir</a>
    </div>
  </div>

    )
}


// const FormPhoneInput = () => {
//   const [phone, setPhone] = useState('');

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Phone Number:
//           <input
//             type="tel"
//             value={phone}
//             onChange={handlePhoneChange}
//             required
//             pattern="[0-9]{10}"
//             placeholder="Enter your phone number"
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <p className='text-red-400'>Phone number entered:<span className='text-black'>{phone}</span> </p> {/* نمایش شماره همراه وارد شده */}
//     </>
//   );
// };
// const FormNameInput = () => {
//   const [name, setName] = useState('');
//   const handleNamechange = (e) => {
//     setName(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           lastname
//           <input type=""
//             value={name}
//             onChange={handleNamechange}
//             required
//             placeholder="Enter your last name"
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <p className='text-red-400'>Enter your last name:<span className='text-black'>{name}</span> </p> {/* نمایش شماره همراه وارد شده */}
//     </>
//   );
// };



export default App;


