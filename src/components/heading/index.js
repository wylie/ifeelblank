import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import './_index.css';

const Heading = ({ className }) => {  
  const outputClassName = cn('heading', `${className}`);

  return (
    <h1 className={outputClassName}>How Are You Feeling?</h1>
  );
}

Heading.displayName = "Heading";

Heading.propTypes = {
  className: PropTypes.string
};

Heading.defaultProps = {
  className: ""
};

export default Heading;
