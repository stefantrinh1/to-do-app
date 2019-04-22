import React from "react";
import PropTypes from 'prop-types';

class Option extends React.Component {
  
    state = {
      editing: false,
      prevValue: this.props.value,
      value: this.props.value
    }
 

  componentDidMount() {
    //adjusts the height of the text areas for responsive text rows
    var textarea = document.querySelector('textarea');
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
    console.log("inside remove item:"+ item)
    
    this.props.removeOption(item);
  };

  completeTask = task => {
    this.props.completeTask(task);
  }


  handleChange(event) {
    // // adds or removes an event handler outside of component
    // if (!this.state.editing) {
    //   // attach/remove event handler
    //   document.addEventListener('click', this.handleSubmit, false);
    // } else {
    //   document.removeEventListener('click', this.handleSubmit, false);
    // }

    // this.setState(prevState => {
    //   return {
    //     value: event.target.value
    //   }
    // })
    console.log("handle change run");
    
  }

  handleSubmit = (event, prevState) => {
    // if (this.node.contains(event.target)) {
    //   return;
    // }

    // event.preventDefault();
    // this.props.editTask(this.state.value, this.state.prevValue)
    // if (this.state.value !== this.state.prevValue) {
    //   this.setState({
    //     prevValue: this.state.value,  
    //   })
    // } else {
    //   console.log("Value is the same. No action needed");
    // }
    console.log("handle submit run");
    
  }


  render() {
    return (
      <div ref={node => { this.node = node; }} className="list__option" key={"option"}>
        <textarea name="task" value={this.state.value} onChange={() => { this.handleChange(event) }} />
        <input type="submit" value="Save" onClick={() => { this.handleSubmit(event) }} />
        <div className="optionButtons">

          <button className="optionButton complete__button"
            name="option"
            onClick={() => {
              this.completeTask(this.state.value);
            }}
          >
            ✓
          </button>

          <button className="optionButton remove__button"
            name="option"
            onClick={() => {
              console.log("value before removal:" + this.state.value)
              this.removeItem(this.state.value);
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
