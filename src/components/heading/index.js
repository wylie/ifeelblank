import React, { Component } from 'react';
import cn from "classnames";

import './_index.css';

const Heading = ({ className }) => {  
  const outputClassName = cn('heading', `${className}`);

  return (
    <h1 className={className}>How Are You Feeling?</h1>
  );
}

Heading.displayName = "Heading";

Heading.propTypes = {
  position: PropTypes.string
};

Heading.defaultProps = {
  position: ""
};

export default Heading;
