import React from "react";
import PropTypes from 'prop-types';

class Option extends React.Component {

  state = {
    // editing: false,
    // prevValue: this.props.value,
    // value: this.props.value
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

  removeItem = item => {
    console.log("inside remove item:" + item)

    this.props.removeOption(item);
  };

  completeTask = task => {
    this.props.completeTask(task);
  }


  handleChange(event) {
    
    // if (this.state.editing === false) {
    //   // attach/remove event handler
    //   document.addEventListener('click',()=>{this.handleSubmit(event)}, false);
    // } else {
    //   document.removeEventListener('click',()=>{this.handleSubmit(event)}, false);
    // }

    // if (this.node.contains(event.target)){
    //   return
    // }
    console.log("handle change hit")

  }

  handleSubmit = (event) => {
    // console.log("handlesubmit active")
    // console.log(event.target.value);
    // // console.log(this.state.prevValue);
    // this.setState(prevState => ({
    //   editing: !prevState.editing,
    //   prevValue: prevState.value,
    //   value: event.target.value
    // }));
    // this.props.editTask(event.target.value, this.state.prevValue);
    console.log("testing")
  }




  render() {
    return (
      <div ref={node => { this.node = node; }} className="list__option" key={"option"}>
        <textarea name="task" typeof='text' defaultValue={this.props.value} onChange={() => { this.handleChange(event) }} />
        <input type="submit" value="Save" onClick={() => { this.handleSubmit(event) }} />
        <div className="optionButtons">

          <button className="optionButton complete__button"
            name="option"
            onClick={() => {
              this.completeTask(this.props.value);
            }}
          >
            ✓
          </button>

          <button className="optionButton remove__button"
            name="option"
            onClick={() => {
              console.log("value before removal:" + this.props.value)
              this.removeItem(this.props.value);
            }}
          >
            X
        </button>
        </div>
      </div>
    )

  }
};
export default Option;
