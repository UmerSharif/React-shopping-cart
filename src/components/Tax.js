import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export default class Tax extends Component {
  render() {
    return (
     <Row className="show-grid">
     
     <Col md={6}>Taxes and Fees</Col>
     <Col md={6}>{`$${this.props.taxes}`}</Col>
     
     </Row>
    )
  }
}
