import React, { Component } from 'react';


const LoginBtn = () => {
    return (
      <button>Iniciar Sesion</button>
    );
  };

const LogoutBtn = () => {
    return (
      <button>Cerrar Sesion</button>
    );
  }

const AdminBtn = () => {
    return (
      <button>Admin</button>
    );
  }

class MyNavBar extends Component {
   render() {
        return (
          <div>
            <AdminBtn />
            <LoginBtn />
            <LogoutBtn />  
          </div>
        );
    }
  };

  export default MyNavBar;