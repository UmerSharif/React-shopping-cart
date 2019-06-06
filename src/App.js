import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import Subtotal from './components/Subtotal'
import PickupSavings from './components/PickupSavings'
import Tax from './components/Tax'
import ETotal from './components/EstimatedTotal'
import ItemDetail from './components/ItemDetail'
import PromoCode from './components/PromoCode'
import {connect} from 'react-redux'
import {handleChange} from './actions/promoAction'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total : 500,
      previousTotal : 600,
      totalSaving : -10.5,
      taxes : 0,
      EstimatedTotal: 0,
      disabledPromo: false,

    }

    this.giveDiscountHandler = this.giveDiscountHandler.bind(this)
  }

  componentDidMount() {
    const totalTax = (this.state.total + this.state.totalSaving) * 0.0875
    const totalEstimatedTotal = this.state.total + this.state.totalSaving + totalTax
    this.setState({
      taxes: totalTax,
      EstimatedTotal: totalEstimatedTotal
    })
  }
  

  giveDiscountHandler(){
   if(this.props.promoCodeData === 'HireMe') {
     const totalAfterDiscount = this.state.EstimatedTotal * 0.9
     this.setState({
       EstimatedTotal: totalAfterDiscount,
       disabledPromo: true
     })
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
        <ItemDetail price={this.state.EstimatedTotal.toFixed(2)} preTotal={this.state.previousTotal.toFixed(2)} />
        <hr />
        <PromoCode 
        giveDiscount = {this.giveDiscountHandler}
        isDisabled = {this.state.disabledPromo}
        />
        </Container>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCodeData: state.promoReducerValue.value
})

export default connect(mapStateToProps, {handleChange})(App)
