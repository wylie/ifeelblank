import React from "react";
import "./styled.css";

const Feeling = ({ theme, type, children }) => {
  return (
    <div
      className={`feeling ${type} ${theme}`}
      children={children}
    />
  );
};

export default Feeling;