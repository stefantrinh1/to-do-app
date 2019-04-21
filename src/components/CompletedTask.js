import React from "react";

class CompletedTask extends React.Component {
  removeTask = item => {
    this.props.removeCompleted(item);
  };
  render() {
    let listCompleted = this.props.state.archived.map((completed, index) => (
      <div className="list__option" key={"completed" + (parseInt(index) + 1)}>
        <li> {completed} </li>{" "}
        <button className="optionButton remove__button"
          name="completedtask"
          onClick={() => {
            this.removeTask(completed);
          }}
        >
          X
        </button>
      </div>
    ));

    return listCompleted;
  }
}

export default CompletedTask;