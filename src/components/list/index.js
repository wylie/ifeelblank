import React, { Component } from 'react';

import styles from './_index.css';

class List extends Component {
  render() {
    return (
      <ul className={styles.List}>
        <li className={styles.excited}>excited</li>
        <li className={styles.tender}>tender</li>
        <li className={styles.scared}>scared</li>
        <li className={styles.angry}>angry</li>
        <li className={styles.sad}>sad</li>
        <li className={styles.happy}>happy</li>
      </ul>
    );
  }
}

export default List;
