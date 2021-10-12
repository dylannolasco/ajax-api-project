import './index.css';
import Pokemon from './components/Pokemon';
import pokeball from './pokeball.png';

function App() {
  return (
    <div className="App">
    <nav>
      <img src={pokeball} alt="pokeball" className="pokeball"/>
      <a href="https://fontmeme.com/pokemon-font/">
      <img src="https://fontmeme.com/permalink/211008/56d3022f2c661c754bd8bb73fa898254.png" alt="pokemon-font" border="0"/>
      </a>
    </nav>
      <Pokemon/>
    </div>
  );
}

export default App;
