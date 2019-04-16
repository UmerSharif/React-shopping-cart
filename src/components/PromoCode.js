import React, { Component } from 'react'
import {Container, Row, Col, Button, Collapse,Media,Jumbotron, Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap'
export default class PromoCode extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false,
            value: ''
        }

        this.ToggleWhatEvs = this.ToggleWhatEvs.bind(this)
    }

    ToggleWhatEvs(){
        this.setState({open: !this.state.open})
    }

  render() {
    return (
      <div>
        <Button className = "promo-button"
        variant = 'link'
        onClick = {this.ToggleWhatEvs}
        >
        {this.state.open === false ? `Apply`: `Hide`}
        Promo Code
        {this.state.open === false ? `+`: `-`}
        </Button>
      </div>
    )
  }
}
