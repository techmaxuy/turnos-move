import React, { Component } from 'react';
import MiBoton from './MiBoton.js';

class MyNavBar extends Component {
    
   render() {
        return ( 
          <div className="MyNavBar">
            <MiBoton text="Admin" handleclick={this.props.handles[2]} isAdmin={this.props.stateData[2]}/>
            <MiBoton text="Iniciar Sesion" handleclick={this.props.handles[0]} isLogued={this.props.stateData[1]}/>
            <MiBoton text="Cerrar Sesion" handleclick={this.props.handles[1]} isLogued={this.props.stateData[1]}/>
            <p className="message" id="message">{this.props.userAgent} - Datos de sesion: {this.props.stateData[0]} - Esta Logued: {this.props.stateData[1] ? "Si" : "No"} -  Es Admin: {this.props.stateData[2] ? "Si" : "No"}</p>
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

  export default MyNavBar;