import React from "react";
import PropTypes from "prop-types";

import "./_index.css";

const Divider = ({ text }) => {
  return (
    <div className="Divider">
      <span className="Divider_text">{text}</span>
    </div>
  );
};

Divider.displayName = "Divider";

Divider.propTypes = {
  text: PropTypes.string
};

Divider.defaultProps = {
  text: ""
};

export default Divider;
