import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import { BACKEND_URL } from '../api-config';

class ResultTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        
    }

  }

    render(){


      axios.get(`http://${BACKEND_URL}/server/account/all`).then(response => {

        this.items = response.data.map((item) => 
        <tr>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.content}</td>
        </tr>)     

      });
    

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
      
          {this.items}
      
      </tbody>
    </Table>
  );
}
}

export default ResultTable;