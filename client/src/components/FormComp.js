import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

import { BACKEND_URL } from '../api-config';

class FormComp extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

        this.submitFormData = () => {

            let account = {
                firstName:document.getElementById('firstName').value,
                lastName:document.getElementById('lastName').value,
                email:document.getElementById('email').value,
                content:document.getElementById('content').value
            };

            console.log(account);

            axios.post(`http://${BACKEND_URL}/server/account/createAccount`,account).then(response => {

            })
        }
    }

    render(){
  return (
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
  );
}
}

export default FormComp;