import React from "react";

import List from "../list";
import Divider from "../divider";

import "./_index.css";

import { feels } from "../../data/feels.js";
import { felt } from "../../data/felt.js";

const Wrap = () => {
  return (
    <div className="Wrap">
      <Divider text="How Do You Feel?" />
      <List theme="primary" data={feels} />
      <Divider text="Previous Feels" />
      <List theme="secondary" data={felt} />
    </div>
  );
};

Wrap.displayName = "Wrap";

export default Wrap;
