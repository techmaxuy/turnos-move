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
    constructor(props) {
      super(props);
    }
   render() {
        return ( 
          <div className="MyNavBar">
            <AdminBtn />
            <LoginBtn />
            <LogoutBtn />  
            <p className="message" id="message">{this.props.userAgent}</p>
          </div>
        );
    }
  };

  export default MyNavBar;