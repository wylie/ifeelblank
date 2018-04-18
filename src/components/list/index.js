import React, { Component } from 'react';

import './_index.css';

class List extends Component {
  render() {
    return (
      <ul className="List">
        <li className="List_item excited">excited</li>
        <li className="List_item tender">tender</li>
        <li className="List_item scared">scared</li>
        <li className="List_item angry">angry</li>
        <li className="List_item sad">sad</li>
        <li className="List_item happy">happy</li>
      </ul>
    );
  }
}

export default List;
