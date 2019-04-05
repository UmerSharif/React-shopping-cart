import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="purchase-card">
        <h1>Hello</h1>
        <Row>
       <Col>1 of 2</Col>
       <Col>2 of 2</Col>
      </Row>
        </Container>
        </div>
    );
  }
}

export default App;
