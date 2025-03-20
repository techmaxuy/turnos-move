import logo from './logonuevo.jpg';
import './App.css';
import './MisClases.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicacion de reserva de turnos
        </p>
        <a
          className="App-link"
          href="https://turnosmove.portal21.work"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagina principal
        </a>
      </header>
    </div>
  );
}

export default App;
