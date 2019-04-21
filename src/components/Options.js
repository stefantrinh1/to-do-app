import React from "react";
import Option from "./Option";

const Options = props => (
  <div className="sub__listContainer">
    <h2>Task List</h2>
    <ul className="list__container">
      <Option state={props.state} completeTask={props.completeTask} removeOption={props.removeOption} />
    </ul>
  </div>
)


export default Options;
