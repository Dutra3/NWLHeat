import { GlobalStyled } from '../../GlobalStyled.js';
import { Container } from './styles.js';
import { Counter } from '../Counter/Counter';
import { SmartCounter } from '../SmartCounter/SmartCounter';

function App() {
  return (
    <div>
      <GlobalStyled/>
      <Container>
        <h1>Contador - Whitout Hooks</h1>
        <Counter/>  
      </Container>
      <Container>
        <h1>Contador - Whith Hooks</h1>
        <SmartCounter/>  
      </Container>
    </div>
  )
}

export default App
