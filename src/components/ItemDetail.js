import React, { Component } from 'react'
import {Container, Row, Col, Button, Collapse,Media,Jumbotron} from 'react-bootstrap'
import Tree from '../tree.jpg'

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
        onClick = {this.ToggleItemDetail}
        >
        {this.state.open === false ? `See`: `Hide`} Item Detail
        {this.state.open === false ? `+`: `-`} 
        </Button>
        <Collapse in={this.state.open}>
        <div style={{marginTop:'10px'}}>  {/*add div inside collapse for smooth animation. from react-bootstrap*/}
        <Jumbotron style={{padding: '1rem 1rem'}}>
            <Media>
                <img
                width={100}
                height={100}
                className="mr-3"
                src={Tree}
                alt="Generic placeholder"
            />

                <Media.Body>
                    <h5>Autumn tree</h5>
                    <p>
                        Buy this Painting and and enjoy beautiful memories
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
