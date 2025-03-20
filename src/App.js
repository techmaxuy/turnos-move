import logo from './logonuevo.jpg';
import './App.css';
import MyNavBar from './MisClases.js';

const userAgent = navigator.userAgent;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicacion de reserva de turnos
        </p>
      </header>
      <MyNavBar userAgent={userAgent}/>
    </div>
  );
}

export default App;


