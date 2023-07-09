import Header from './componentes/Header';
import Body from './componentes/Body';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  );
}

export default App;