import React, { Component } from 'react';

import Heading from '../heading';
import List from '../list';

import './_index.css';

class Wrap extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={Wrap}>
        <Heading />
        <List />
        {children}
      </div>
    );
  }
}

export default Wrap;
