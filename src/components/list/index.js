import React, { Component } from 'react';

import './_index.css';

class List extends Component {
  render() {
    return (
      <ul className={List}>
        <li className={excited}>excited</li>
        <li className={tender}>tender</li>
        <li className={scared}>scared</li>
        <li className={angry}>angry</li>
        <li className={sad}>sad</li>
        <li className={happy}>happy</li>
      </ul>
    );
  }
}

export default List;
