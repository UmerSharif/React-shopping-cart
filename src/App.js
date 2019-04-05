import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import Subtotal from './components/Subtotal'
import PickupSavings from './components/PickupSavings'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total : 0,
      totalSaving : -3.5
    }
  }
  render() {
    return (
      <div className="App">
        <Container className="purchase-card">
        <h3 style={{marginBottom : '1.5em', textAlign: 'center'}}>Shopping Cart</h3>
        <Subtotal price = {this.state.total.toFixed(2)} />
        <PickupSavings price = {this.state.totalSaving} />
        </Container>
        </div>
    );
  }
}

export default App;
