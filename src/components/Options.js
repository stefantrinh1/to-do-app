import React from "react";
import Option from "./Option";

class Options extends React.Component {

render() {
  console.log("inside options class: "+this.props.state.options)
  let listOptions =  this.props.state.options.map((option, index) => (
  <div className="sub__listContainer">
      <Option state={this.props.state} value={option} editTask={this.props.editTask} completeTask={this.props.completeTask} removeOption={this.props.removeOption} />
  </div>));
  return listOptions;
}
}


export default Options;
