import React from 'react'
import '../stylos/menu.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const menu = () => {
    return ( <div className="menu_1">
      <h1>rick and morty</h1>
      <Link to="/" className=""><button>inicio</button></Link>
      <Link to="/personas" className=""><button>personas</button></Link>
    </div> );
}
 
export default menu;