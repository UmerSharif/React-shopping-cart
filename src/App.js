import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import Subtotal from './components/Subtotal'
import PickupSavings from './components/PickupSavings'
import Tax from './components/Tax'
import ETotal from './components/EstimatedTotal'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total : 0,
      totalSaving : -3.5,
      taxes : 0,
      EstimatedTotal: 0
    }
  }
  render() {
    return (
      <div className="App">
        <Container className="purchase-card">
        <h3 style={{marginBottom : '1.5em', textAlign: 'center'}}>Shopping Cart</h3>
        <Subtotal price = {this.state.total.toFixed(2)} />
        <PickupSavings price = {this.state.totalSaving} />
        <Tax taxes = {this.state.taxes.toFixed(2)} />
        <hr />
        <ETotal price = {this.state.EstimatedTotal.toFixed(2)} />
        </Container>
        </div>
    );
  }
}

export default App;
