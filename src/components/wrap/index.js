import React, { Component } from 'react';

import Heading from '../heading';
import List from '../list';

import './_index.css';

class Wrap extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="Wrap">
        <Heading level="1" className="heading" children="How Are You Feeling?" />
        <List />
        <Heading level="2" className="subheading">
          I Feel <span></span>.
        </Heading>
        {children}
      </div>
    );
  }
}

export default Wrap;
