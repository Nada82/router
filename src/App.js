import React from 'react';
import './App.css';
import Category from './components/Category';
import Products from './components/Products';
import Home from "./components/Home";
import Admin from "./components/AdminArea";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/home" >Home</Link></li>
            <li> <Link to="/category"> CATEGORY </Link> </li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/Admin">Admin area</Link></li>

          </ul>
         </nav>
  <Route path="/home" component={Home} />
  <Route path="/Category" component={Category} />
  <Route path="/Products" component={Products} />
  <Route path="/Admin" component={Admin} />
      </header>
    </div>
  );
}
export default App;