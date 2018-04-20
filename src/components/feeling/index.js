import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./_index.css";

const Feeling = ({ theme, type }) => {
  const outputClassName = cn(Feeling, [
    `Feeling Feeling__${theme} Feeling__${type}`
  ]);
  return <div className={outputClassName}>{type}</div>;
};

Feeling.displayName = "Feeling";

Feeling.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  type: PropTypes.string
};

Feeling.defaultProps = {
  theme: "",
  type: ""
};

export default Feeling;
