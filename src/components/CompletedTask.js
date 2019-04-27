import React from "react";

class CompletedTask extends React.Component {

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

  removeTask = task => {
    this.props.removeCompleted(task);
  };


  handleChange(event) {

    document.addEventListener('click',this.handleSubmit,false);

    if (this.completedNode.contains(event.target)){
      return
    }
  }

  handleSubmit = (event) => {    

    this.setState(() => ({
      editing: true,
    }));
    this.props.editCompletedTask(this.completedNode.firstChild.value, this.state.prevValue)
   
  }

  render() {
    return (
      <div ref={completedNode => { this.completedNode = completedNode; }} className="list__option" key={"completed"}>

        <textarea
          name="task"
          defaultValue={this.props.value}
          onChange={() => { this.handleChange(event) }}
        />
 

        <button className="optionButton remove__button"
          name="completedtask"
          onClick={() => { this.removeTask(this.props.value); }}
        >
          X
        </button>

      </div>
    );
  }
}

export default CompletedTask;