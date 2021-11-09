import logo from './logo.svg';
import './App.css';
import Navigation  from './components/Navigation.js';

function App() {
  return (
    <div className="App">
      <header>
        
        <Navigation titulo="Mi primera Navegacion" />
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
