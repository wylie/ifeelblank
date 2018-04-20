import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Feeling from "../feeling";

import "./_index.css";

const List = ({ className, data, theme }) => {
  const outputClassName = cn(`List List__${theme}`);
  return (
    <ul className={outputClassName}>
      {data.map((item, index) => (
        <li key={index} className="List_item">
          <Feeling theme={theme} type={item.type} />
        </li>
      ))}
    </ul>
  );
};

List.displayName = "List";

List.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default List;
