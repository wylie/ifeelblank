import React from "react";

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

export default List;
