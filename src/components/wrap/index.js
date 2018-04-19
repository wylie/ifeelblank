import React from "react";

import Heading from "../heading";
import List from "../list";

import "./_index.css";

import { headings } from "../../data/headings.js";

const Wrap = () => {
  return (
    <div className="Wrap">
      <Heading level="1" className="heading" children={headings.main} />
      <List />
      <Heading level="2" className="subheading">
        {headings.sub} <span />.
      </Heading>
      <span />
    </div>
  );
};

Wrap.displayName = "Wrap";

export default Wrap;
