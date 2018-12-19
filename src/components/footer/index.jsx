import React from 'react';
import PropTypes from "prop-types";

import './_index.css';

const Footer = ({ children }) => {
  return (
    <div className="Footer">
      {children}
    </div>
  );
}

Footer.propTypes = {
  children: PropTypes.string
};

Footer.defaultProps = {};

export default Footer;
