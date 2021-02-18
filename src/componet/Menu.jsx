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
      <div className ="contenido">
        <h1>rick and morty</h1>
      </div>
      <div className="botones">
        <Link to="/" className="boton1"><button>inicio</button></Link>
        <Link to="/personas" className="boton1"><button>personas</button></Link>
      </div>
    </div> );
}
 
export default menu;