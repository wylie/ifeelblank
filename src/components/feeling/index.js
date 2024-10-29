import React from "react";
import "./styled.css";

const Feeling = ({ element = "div", theme, kind, children, ...feelingprops }) => {
  const Element = element;
  return (
    <Element
      className={`feeling ${kind} ${theme}`}
      children={children}
      {...feelingprops}
    />
  );
};

export default Feeling;