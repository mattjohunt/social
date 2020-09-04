import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ResultTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        
    }

  }

    render(){

  return (
<Table bordered>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
      
          {this.props.listOfItems}
      
      </tbody>
    </Table>
  );
}
}

export default ResultTable;