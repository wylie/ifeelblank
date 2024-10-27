import React from "react";
import Heading from "../heading";
import Feelings from "../feelings";
import FeelingsPast from "../feelings_past";
import "./styled.css";

const Wrap = () => {
  return (
    <div className="wrap">
      <Heading>How Do You Feel?</Heading>
      <Feelings />
      <Heading>Previous Feels</Heading>
      <FeelingsPast />
    </div>
  )
};

export default Wrap;