import React, { Component } from 'react';

import Heading from '../heading';
import List from '../list';

import styles from './_index.css';

class Wrap extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.Wrap}>
        <Heading />
        <List />
        {children}
      </div>
    );
  }
}

export default Wrap;
