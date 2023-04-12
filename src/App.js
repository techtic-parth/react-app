import './App.css';
import { Container } from "react-bootstrap";
import FormsEx from './Component/FormsEx';
import CountEx from './Component/CountEx';


function App() {
  return (
    <div className="App">
      <Container>
        <FormsEx/>
        <CountEx
          countStart = {0}
        /> 
      </Container>
    </div>
  );
}
export default App;
