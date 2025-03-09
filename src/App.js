import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [nome, setNome] = useState('Vinny')

  function alterarNome () {
    setNome('Vinicios Neves')
    console.log(nome)
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
