import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.css";

const Divider = ({ theme, type }) => {
  const outputClassName = cn(Divider, [
    `Divider`
  ]);
  return <div className={outputClassName} />;
};

Divider.displayName = "Divider";

Divider.propTypes = {};

Divider.defaultProps = {};

export default Divider;
