import React from "react";

class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(item) {
    this.props.removeOption(item);
  }

  render() {
    let listOptions = this.props.state.options.map((option, index) => (
      <div key={"option" + (parseInt(index) + 1)}>
        <li> {option} </li>{" "}
        <button
          name="option"
          onClick={() => {
            this.removeItem(option);
          }}
        >
          Remove
        </button>
      </div>
    ));

    return listOptions;
  }
}

export default Option;
