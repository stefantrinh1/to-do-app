import React from "react";

class Option extends React.Component {
  removeItem = item => {
    this.props.removeOption(item);
  };

  render() {
    let listOptions = this.props.state.options.map((option, index) => (
      <div className="list__option" key={"option" + (parseInt(index) + 1)}>
        <li> {option} </li>{" "}
        <button className="remove__button"
          name="option"
          onClick={() => {
            this.removeItem(option);
          }}
        >
          X
        </button>
      </div>
    ));

    return listOptions;
  }
}

export default Option;
