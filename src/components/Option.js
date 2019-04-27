import React from "react";

class Option extends React.Component {

  state = {
    editing: false,
    prevValue: this.props.value,
    value: this.props.value,
  }

  componentDidMount() {
    //adjusts the height of the text areas for responsive text rows
    var textarea = document.querySelector("textarea");
    textarea.addEventListener('keydown', autosize);

    function autosize() {
      var el = this;
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }
  }

  // send task to remove to top parent component
  removeItem = item => {
    this.props.removeOption(item);
  };

   // send task to complete to top parent component
  completeTask = task => {
    this.props.completeTask(task);
  }

  componentDidUpdate = (prevProps, prevState) => {
    // once the component has been exited from focus and updated removes
    // the event listener to stop further clicking
    document.removeEventListener('click', this.handleSubmit, false);
    console.log("Option Component Updated");

  }

  // when the textarea for the tasks detects a change it activates
  // and event
  handleChange(event) {
    // once editing has been activated
    document.addEventListener('click', this.handleSubmit, false);
    if (this.optionNode.contains(event.target)) {
      return
    }
  }
// takes the changed value and prev value once the user has clicked away from the component
  handleSubmit = (event) => {
    this.setState(() => ({
      editing: true,
    }));
    this.props.editTask(this.optionNode.firstChild.value, this.state.prevValue)

  }

  render() {
    return (
      <div ref={optionNode => { this.optionNode = optionNode; }} className="list__option">
        <textarea
          name="task"
          typeof='text'
          defaultValue={this.props.value}
          onChange={() => { this.handleChange(event) }}
        />
        <input
          type="submit"
          value="Save"
          onClick={() => { this.handleSubmit(event) }}
        />
        <div className="optionButtons">

          <button className="optionButton complete__button"
            name="option"
            onClick={() => { this.completeTask(this.props.value); }}
          >
            ✓
          </button>

          <button className="optionButton remove__button"
            name="option"
            onClick={() => { this.removeItem(this.props.value); }}
          >
            X
        </button>
        </div>
      </div>
    )

  }
};
export default Option;
