import React from "react";

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.state = {
      error: undefined
    };
  }

  addToList(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
    let error = this.props.addOption(option);
    this.setState(() => {
      if (error) {
        return {
          error: error
        };
      } else {
        return {
          error: undefined
        };
      }
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <p>{this.state.error}</p>
          <input type="text" name="option" />
          <button>Add Option to List</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
