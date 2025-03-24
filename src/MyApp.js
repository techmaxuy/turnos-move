import React, { Component } from 'react';
import logo from './logonuevo.jpg';
import MyNavBar from './MyNavBar.js';


class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogued: false,
            isAdmin: false,
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleAdminClick = this.handleAdminClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLogued: true});
    }

    handleLogoutClick() {
        this.setState({isLogued: false});
    }

    handleAdminClick() {
        this.setState({isAdmin: true});
    }
    
   render() {

        const userName = "Invitado";
        const isLogued = this.state.isLogued;
        const isAdmin = this.state.isAdmin;

        return ( 
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Aplicacion de reserva de turnos
                    </p>
                </header>
                <MyNavBar userAgent={this.props.userAgent} stateData={[userName, isLogued, isAdmin]} handles={[this.handleLoginClick, this.handleLogoutClick, this.handleAdminClick]}/>
            </div>
        );
    }
  };

export default MyApp;