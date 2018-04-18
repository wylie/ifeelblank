import React from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

import './_index.css';

const Heading = ({ level, className, children }) => {  
  const outputClassName = cn('heading', `${className}`);
  const headingLevel = `h${level}`;

  return (
    <headingLevel className={outputClassName}>{children}</headingLevel>
  );
}

Heading.displayName = "Heading";

Heading.propTypes = {
  level: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

Heading.defaultProps = {
  level: "",
  className: "",
  children: ""
};

export default Heading;
