import React from "react";
import PropTypes from "prop-types";
import "./styled.css";

const Heading = ({ children }) => (
  <h2 className="heading">
    {children}
  </h2>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired
};

export default Heading;