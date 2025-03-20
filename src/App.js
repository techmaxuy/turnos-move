
import logo from './logonuevo.jpg';
import './App.css';
import MyNavBar from './MisClases.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicacion de reserva de turnos
        </p>
        <div id="message">
        </div>
      </header>
      <MyNavBar />
    </div>
  );
}

export default App;

ReactDOM.render(<MyNavBar />, document.getElementById('message'));
