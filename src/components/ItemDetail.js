import React, { Component } from 'react'
import {Container, Row, Col, Button, Collapse, Well, Media} from 'react-bootstrap'

export default class ItemDetail extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false
        }

        this.ToggleItemDetail = this.ToggleItemDetail.bind(this)
    }

    ToggleItemDetail(){
     this.setState({open:!this.state.open})
   }

  render() {
    return (
      <div>
        
        <Button className="item-detail-button"
        bsStyle = "link"
        onClick = {this.ToggleItemDetail}
        >
        {this.state.open === false ? `See`: `Hide`} Item Detail
        {this.state.open === false ? `+`: `-`} 
        </Button>

      </div>
    )
  }
}
