import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menucomponent';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
  );
}

export default App;
