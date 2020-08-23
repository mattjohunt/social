import React, { Component } from 'react';
import {Button
} from 'reactstrap';
import axios from 'axios';

import { BACKEND_URL } from '../api-config';

class Example extends Component {
constructor(props){
  super(props);
  this.state = {
  }

this.doSomething = () => {
axios.get(`http://${BACKEND_URL}/server/account/all`).then(response => {

  console.log(response.data);
  this.setState({
      data: response.data
  });

});
  }
}
render(){
  return (
    <div>
        <Button onClick={this.doSomething}>This text</Button>
    </div>    

  );
};

}

export default Example;