import React from "react";

import Heading from "../heading";
import List from "../list";
import Divider from "../divider";

import "./_index.css";

import { headings } from "../../data/headings.js";
import { feels } from "../../data/feels.js";
import { felt } from "../../data/felt.js";

const Wrap = () => {
  return (
    <div className="Wrap">
      <Heading level="1" className="heading" children={headings.main} />
      <List theme="primary" data={feels} />
      <Heading level="2" className="subheading">
        {headings.sub} <span />.
      </Heading>
      <Divider />
      <List theme="secondary" data={felt} />
    </div>
  );
};

Wrap.displayName = "Wrap";

export default Wrap;
