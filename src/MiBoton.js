import React, { Component } from 'react';

class MiBoton extends Component {    
   render() {

        if (this.props.text ==="Iniciar Sesion" && this.props.isLogued === false) {
            return ( 
            <>
                <button onClick={this.props.handleclick} className="homeBtn">{this.props.text}</button>
            </>
            );
        }

        if (this.props.text ==="Cerrar Sesion" && this.props.isLogued === true) {
            return ( 
            <>
                <button onClick={this.props.handleclick} className="homeBtn">{this.props.text}</button>
            </>
            );     
        }

        if (this.props.text ==="Admin" &&  this.props.isLogued === true) {
            return ( 
            <>
                <button onClick={this.props.handleclick} className="homeBtn">{this.props.text}</button>
            </>
            );        
        }
  };
};
  
export default MiBoton

