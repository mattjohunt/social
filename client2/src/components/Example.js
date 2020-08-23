import React, { Component } from 'react';
import {Button
} from 'reactstrap';
import axios from 'axios';

class Example extends Component {
constructor(props){
  super(props);
  this.state = {
  }

this.doSomething = () => {
axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(response => {

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