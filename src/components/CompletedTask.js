import React from "react";
import Textarea from 'react-textarea-autosize';

class CompletedTask extends React.Component {

  state = {
    editing: false,
    prevValue: this.props.value,
    value: this.props.value,
  }

  componentDidMount() {

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

        <Textarea
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