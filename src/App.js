
import Loginn from './component/loginn';
import Desk from './component/desk';
import React from 'react';
import ReactDom  from 'react-dom';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';




const App=()=> {
  console.log(2);
return(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={ <Loginn/>}/>
    <Route path='/desk' element={ <Desk/>}/>
  </Routes>
  </BrowserRouter>

)
}
export default App;



