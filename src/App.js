import './App.css';
import Logo from './componentes/logo';
import OpcoesHeader from './componentes/opcoes-header';
import IconesHeader from './componentes/icones-header';

function App() {
  return (
    <div className='App'>

      <header className='App-header'>

        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>

      </header>

    </div>
  );
}

export default App;