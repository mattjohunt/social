import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import ResultTable from './ResultTable'

import { BACKEND_URL } from '../api-config';

class FormComp extends Component {
    constructor(props){
        super(props);
        this.state = {
          listOfItems: null,

        }

        this.submitFormData = () => {

            let account = {
                firstName:document.getElementById('firstName').value,
                lastName:document.getElementById('lastName').value,
                email:document.getElementById('email').value,
                content:document.getElementById('content').value
            };

            axios.post(`http://${BACKEND_URL}/server/account/createAccount`,account).then(response => {

            })

            axios.get(`http://${BACKEND_URL}/server/account/all`).then(response => {

              let items = response.data.map((item) => 
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.content}</td>
              </tr>)
              
              this.setState({
                listOfItems: items,
              });
      
            });
            
        }
    }

    render(){
  return (
    <div>
    <Form>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input name="firstName" id="firstName"/>
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input name="lastName" id="lastName"/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email"/>
      </FormGroup>
      <FormGroup>
        <Label for="content">Post Content</Label>
        <Input type="textarea" name="content" id="content" />
      </FormGroup>
      <Button onClick={this.submitFormData}>Submit</Button>
    </Form>
    <ResultTable listOfItems={this.state.listOfItems}/>
    </div>
  );
}
}

export default FormComp;