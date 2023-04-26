import './App.css';
import { Container } from "react-bootstrap";
import FormsEx from './Component/FormsEx';
import CountEx from './Component/CountEx';
import Todo from './Component/todo';

function App() {
  return (
    <div className="App mt-3">
      <Container>
        <FormsEx/>
        <CountEx
          countStart = {0}
        /> 
        <Todo/>
      </Container>
    </div>
  );
}
export default App;
