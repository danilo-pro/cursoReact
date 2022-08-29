import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Luciana";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Danilo" />
      <SayMyName nome="Antonio" />
      <SayMyName nome={nome} />
      <Pessoa nome="Priscila" idade="30" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
