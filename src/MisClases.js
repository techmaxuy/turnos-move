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
            <p className="message" id="message">{this.props.userAgent} - Datos de sesion: {this.props.stateData[0]} - Esta Logued: {this.props.stateData[1] ? "Si" : "No"} -  Es Admin: {this.props.stateData[2] ? "Si" : "No"}</p>
          </div>
        );
    }
  };

  MyNavBar.defaultProps = {
    userAgent: "Desconocido",
    stateData: ["Invitado", false, false]
  };

  export default MyNavBar;