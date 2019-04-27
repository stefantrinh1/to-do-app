import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  addToList = e => {
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
  };

  render() {
    return (
      <div className="add__option">

        <form onSubmit={this.addToList}>

          <input
            placeholder="Enter Task To List"
            type="text" name="option"
          />

          <button>+</button>
          
        </form>

        <p className="error-message">{this.state.error}</p>

      </div>
    );
  }
}

export default AddOption;
