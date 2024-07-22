
import Loginn from './component/loginn';
import Desk from './component/desk';
import React from 'react';
import ReactDom  from 'react-dom';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Dashboard from './component/dashboard';



const App=()=> {
return(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={ <Loginn/>}/>
    <Route path='/desk' element={ <Desk/>}/>
    <Route path='/dashboard' element={ <Dashboard/>}/>
  </Routes>
  </BrowserRouter>

)
}
export default App;



