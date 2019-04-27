import React from "react";
import Option from "./Option";

class Options extends React.Component {

  render() {
    let listOptions = this.props.state.options.map((option, index) => (
      <div className="sub__listContainer" key={"option" + index}>
        <Option
          state={this.props.state}
          key={option} 
          value={option}
          completeTask={this.props.completeTask}
          removeOption={this.props.removeOption}
          editTask={this.props.editTask}
        />
      </div>));
    return listOptions;
  }
}


export default Options;
