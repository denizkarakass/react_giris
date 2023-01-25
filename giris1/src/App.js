import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div>
    <Container>
      <Row>
      <Navi title="Üst Menü" />
      </Row>
      <Row>
        <Col xs="3">Deneme</Col>
        <Col xs="3">Deneme</Col>
        <Col xs="3">Deneme</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
