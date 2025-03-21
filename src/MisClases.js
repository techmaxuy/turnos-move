import React, { Component } from 'react';

const LoginBtn = (props) => {
    return (
      <button onClick={props.onclic} className="homeBtn">Iniciar Sesion</button>
    );
  };

const LogoutBtn = (props) => {
    return (
      <button onClick={props.onclic} className="homeBtn">Cerrar Sesion</button>
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

        this.state = {
            isLogued: false,
            isAdmin: false,
        }

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.setState({isLogued: true});
    }

    logout() {
        this.setState({isLogued: false});
    }
       
    
   render() {
        return ( 
          <div className="MyNavBar">
            <AdminBtn />
            <LoginBtn onclic={this.login}/>
            <LogoutBtn onclic={this.logout} />  
            <p className="message" id="message">{this.props.userAgent} - Datos de sesion: {this.props.stateData[0]} - Esta Logued: {this.state.isLogued ? "Si" : "No"} -  Es Admin: {this.state.isAdmin ? "Si" : "No"}</p>
          </div>
        );
    }
  };
  
  /*
  MyNavBar.defaultProps = {
    userAgent: "Desconocido",
    stateData: ["Invitado", false, false]
  };
  NO FUNCIONA
  */

  /*
  MyNavBar.propTypes = {
    userAgent: React.PropTypes.string,
    stateData: React.PropTypes.array
  };
  NO FUNCIONA
  */
/*
switch (this.props.stateData[1]) {
    case true:
        this.setState({isLogued: true});
        break;
    case false: 
        this.setState({isLogued: false});
        break;
    default:
        break;
}

switch (this.props.stateData[2]) {
    case true:
        this.setState({isAdmin: true});
        break;
    case false: 
        this.setState({isAdmin: false});
        break;
    default:
        break;
}
*/
  export default MyNavBar;