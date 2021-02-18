import React, {useState,useEffect} from 'react';
import Api from './componet/Api';
import Menu from './componet/Menu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  return (
    <div>
      
      <Router>
        <Menu/>
          <Switch>
            
            <Route path="/personas">
              
              <Api/>

            </Route>
            <Route path="/" >
              
            </Route>

          </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
