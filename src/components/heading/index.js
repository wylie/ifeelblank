import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import './_index.css';

const Heading = ({ className, children }) => {  
  const outputClassName = cn('heading', `${className}`);

  return (
    <h1 className={outputClassName}>{children}</h1>
  );
}

Heading.displayName = "Heading";

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

Heading.defaultProps = {
  className: "",
  children: ""
};

export default Heading;
