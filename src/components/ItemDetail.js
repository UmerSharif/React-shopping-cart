import React, { Component } from 'react'
import {Container, Row, Col, Button, Collapse,Media,Jumbotron} from 'react-bootstrap'
import Aurelia from '../aurelia.jpg'

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
        <Collapse in={this.state.open}>
        <div style={{marginTop:'10px'}}>
        <Jumbotron style={{padding: '1rem 1rem'}}>
            <Media>
                <img
                width={100}
                height={100}
                className="mr-3"
                src={Aurelia}
                alt="Generic placeholder"
            />

                <Media.Body>
                    <h5>Aurelia</h5>
                    <p>
                        Buy this item and get a chance to hangout with super cool Girl Aurelia.
                    </p>
                    <Row className="show-grid">
                    <Col md={6}>
                    <strong> {`$${this.props.price}`}</strong>
                    <strong className="strike-price"> {`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> QTY: 1 </Col>
                    </Row>
                    </Media.Body>

            </Media>
        </Jumbotron>
        </div>
        
        </Collapse>
      </div>
    )
  }
}
