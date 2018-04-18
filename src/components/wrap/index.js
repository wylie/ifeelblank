import React, { Component } from 'react';

import Heading from '../heading';
import List from '../list';

import './_index.css';

class Wrap extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="Wrap">
        <Heading className="heading" children="How Are You Feeling?" />
        <List />
        <Heading className="subheading" children="I Feel ________." />
        {children}
      </div>
    );
  }
}

export default Wrap;
