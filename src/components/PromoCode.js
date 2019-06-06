import React, { Component } from 'react'
import {Container, Row, Col, Button, Collapse,Media,Jumbotron, Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
import {connect} from 'react-redux'
import {handleChange} from '../actions/promoAction'

 class PromoCode extends Component {
  constructor(props){
        super(props)

        this.state = {
            open: false
        }

        this.ToggleWhatEvs = this.ToggleWhatEvs.bind(this)
    }

    ToggleWhatEvs(){
        this.setState({open: !this.state.open})
    }

    handleChange = formVal => {
      this.props.handleChange(formVal)
    }

  render() {
    return (
      <div>
        <Button className = "promo-button"
        variant = 'link'
        onClick = {this.ToggleWhatEvs}
        >
        {this.state.open === false ? `Apply `: `Hide `}
        promo code
        {this.state.open === false ? ` +`: ` -`}
        </Button>
        <Collapse in={this.state.open}>
        <div style={{marginTop:'10px'}}>
        <Jumbotron style={{padding: '1rem 1rem'}}>
        <Row className="show-grid">
          <Col md={12}>
            <Form>
              <FormGroup controlId="formInlineName">
                <FormLabel>Promo Code
                  <FormControl 
                  type="text" 
                  placeholder="Enter Promo Code"
                  value = {this.props.promoCodeData} 
                  onChange={this.handleChange}
                  />
                </FormLabel>
              </FormGroup>
              <Button variant="success"
              disabled = {this.props.isDisabled}
              onClick = {this.props.giveDiscount}
              >
        Redeem Code
        </Button>
            </Form>
          </Col>
          </Row>
        </Jumbotron>


          </div>
        </Collapse>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  promoCodeData: state.promoReducerValue.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode)

