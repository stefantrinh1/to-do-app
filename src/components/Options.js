import React from "react";
import Option from "./Option";

const Options = props => (
    <ul className="list__container">
      <Option state={props.state} removeOption={props.removeOption} />
    </ul>
  )


export default Options;
