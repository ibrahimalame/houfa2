import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


export default class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
      }
    
  render() {
    return (
        <tr>
            <td><Form><Form.Check 
                type='checkbox'
                id={''}
                label={''}/>
                </Form>
            </td>
        <td> {this.props.id} </td>
        <td> {this.props.first_name} </td>
        <td> {this.props.last_name} </td>
        <td> {this.props.email} </td>
        <td> {this.props.phone_number} </td>
        <td>
            
            <Link to={{ 
                pathname: `/interviews/${this.props.id}`,
                state: { id: this.props.id }
                }}><Button variant="primary"> View </Button>
            </Link>
            
                          
        </td>
        </tr>
    );
  }
}

