import logo from './logo.svg';
import './App.css';
import Login from './component/login';

function App() {
  return (
    <div className="App flex items-end   mt-40 ml-36">
      <div className='asl'>
        <h1>

        </h1>
        <div className="flex justify-center ...">
          <div className="w-full bg-blue-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border-4 border-indigo-500/100 border-solid border-2 border-indigo-800">
            <div  className="p-6 space-y-4 md:space-y-6 sm:p-8 mr-10" >
              
              <input class="flex flex-col items-center ml-14 rounded-lg "  placeholder="کد تصویر"  ></input>
              <input class="flex flex-col ml-14 items-center rounded-lg" placeholder="شماره همراه"></input>
              <div className="w-44 ml-16 rounded-lg">

              <img src='captua.png'/>
              </div>
              <button class="text-gray-200 focus:border bg-blue-600 rounded w-16 h-9">
                تایید
              </button>
            
            </div>
          </div>
        </div>
      </div>
      <div class="columns-1 ml-80">

      <img src='fidiptype.png'/>
      <p class=" text-gray-200 focus:border bg-blue-600 rounded w-30 h-15 "  > سامانه مدیریت امور سهام</p>
      {/* <a href='#' class="text-blue-600  ">www.fidip.ir</a> */}
      </div>
    </div>
  );
}

export default App;
