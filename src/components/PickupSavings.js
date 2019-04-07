import React, { Component } from 'react'
import {Container, Row, Tooltip, OverlayTrigger, Col} from 'react-bootstrap'

const styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: '800'
    }
}


export default class PickupSavings extends Component {
  render() {
    const tooltip = (

        <Tooltip id="tooltip">
          <p>Total Savings</p>
        </Tooltip>
    )
    return (
      <Row className="show-grid">
      <Col md={6}>
      <OverlayTrigger placement="bottom" overlay={tooltip}>
      <div style = {styles.pickupSavings} >PickUp Savings</div>
      </OverlayTrigger>
      </Col>
      <Col md={6} style={styles.totalSavings}>{`$${this.props.price}`}</Col>
      </Row>
    )
  }
}
