import React from 'react';
import Login from './components/Login';
import Create from './components/Create';
import Sms1 from './components/Sms1';
import Sms2 from './components/Sms2';
import './App.css';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <React.Fragment>  
      <div>
        <BrowserRouter>
                <Route path='/Login' component={Login}/>
                <Route path='/Create' component={Create}/>
                <Route exact path='/' component={Login}/>
                <Route exact path='/Sms1' component={Sms1}/>
                <Route exact path='/Sms2' component={Sms2}/>
               
               
                </BrowserRouter>
               
            </div> 
    </React.Fragment>
  );
}

export default App;
