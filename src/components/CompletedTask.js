import React from "react";

class CompletedTask extends React.Component {

    state = {
        value: this.props.value
    }

  removeTask = task => {
    this.props.removeCompleted(task);
    this.setState(()=>{
        value:undefined;
    })
  };
  editTask = task => {
    console.log(task);
  };

  render() {
    return (
      <div className="list__option" key={"completed"}>
        <li><textarea name="task" value={this.props.value} onChange={() => {
        this.editTask("new value")}
        }/></li>{" "}
        <button className="optionButton remove__button"
          name="completedtask"
          onClick={() => {
            this.removeTask(this.props.value);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default CompletedTask;