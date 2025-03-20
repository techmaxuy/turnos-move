import React, { Component } from 'react';


const LoginBtn = () => {
    return (
      <button className="homeBtn">Iniciar Sesion</button>
    );
  };

const LogoutBtn = () => {
    return (
      <button className="homeBtn">Cerrar Sesion</button>
    );
  }

const AdminBtn = () => {
    return (
      <button className="homeBtn">Admin</button>
    );
  }

class MyNavBar extends Component {
   render() {
        return (
          <div className="MyNavBar">
            <AdminBtn />
            <LoginBtn />
            <LogoutBtn />  
          </div>
        );
    }
  };

  export default MyNavBar;