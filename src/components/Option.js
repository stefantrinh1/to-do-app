import React from "react";

class Option extends React.Component {
  removeItem = item => {
    this.props.removeOption(item);
  };

  completeTask = task => {
    this.props.completeTask(task);
  }

  render() {
    let listOptions = this.props.state.options.map((option, index) => (
      <div className="list__option" key={"option" + (parseInt(index) + 1)}>
        <li> {option} </li>{" "}
        <div className="optionButtons">
          <button className="optionButton complete__button"
            name="option"
            onClick={() => {
              this.completeTask(option);
            }}
          >
            ✔
        </button>
          <button className="optionButton remove__button"
            name="option"
            onClick={() => {
              this.removeItem(option);
            }}
          >
            X
        </button>
        </div>
      </div>
    ));

    return listOptions;
  }
}

export default Option;
