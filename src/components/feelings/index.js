import React from "react";
import Feeling from "../feeling";
import "./styled.css";

const Feelings = () => {
  const feels = ["excited", "tender", "scared", "angry", "sad", "happy"];
  return (
    <div className="feels">
      {feels.map((index) => (
        <Feeling element="button" type="button" theme={"primary"} kind={index} key={index} children={index} />
      ))}
    </div>
  )
};

export default Feelings;