import './App.css';
import MyApp from './MyApp.js';

const userAgent = navigator.userAgent;

function App() {

  console.log("reder myApp")
  return (
    <>
      <MyApp userAgent={userAgent} />
    </>
  );
}

export default App;


