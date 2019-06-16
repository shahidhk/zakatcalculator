import React from 'react';
import { 
  Jumbotron,
  Container,
} from 'react-bootstrap';
import ZakatCalculator from './Components/ZakatCalculator';
import Footer from './Components/Footer';

function App() {
  return (<>
    <Jumbotron fluid>
      <Container>
        <h1>Zakat Calculator</h1>
        <p>
          A web application for calulating the Zakat amount you owe.
        </p>
      </Container>
    </Jumbotron>

    <ZakatCalculator />
    <Footer/>
  </>);
}

export default App;
