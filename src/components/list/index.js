import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_index.css";

import { feels } from "../../data/feels.js";

const List = () => {
  return (
    <ul className="List">
      {feels.map((item, index) => (
        <li className={`List_item ${item}`}>{item}</li>
      ))}
    </ul>
  );
};

List.displayName = "Bananas";

export default List;
