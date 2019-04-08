import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <ul>
      <Option state={props.state} removeOption={props.removeOption} />
    </ul>
  );
};

export default Options;
