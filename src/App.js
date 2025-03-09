import logo from './logo.svg';
import './App.css';

function App() {

  let nome = 'Vinny'

  function alterarNome () {
    nome = 'Vinicios Neves'
    console.log(nome)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{nome}</h1>
        <button onClick={alterarNome}>Mudar para nome completo</button>
      </header>
    </div>
  );
}

export default App;
