import React from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel"
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./Modal";
import Modal from "react-modal";
import CompletedTasks from "./CompletedTasks"
import SubHeader from "./SubHeader"

class ToDoApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    archived: []
  };

  // method to choose an option
  chooseOption = () => {
    let Options = this.state.options;
    let chosenOption = Options[Math.floor(Math.random() * Options.length)];
    this.setState(() => {
      return {
        selectedOption: chosenOption
      };
    });
  };

  componentDidMount = () => {
    let optionData = [];
    let pulledOptionData = localStorage.getItem("options");
    if (pulledOptionData !== null) {
      optionData = this.props.options.concat(JSON.parse(pulledOptionData));
    }
    let archivedData = [];
    let pulledArchivedData = localStorage.getItem("archived");
    if (pulledArchivedData !== null) {
      archivedData = this.props.options.concat(JSON.parse(pulledArchivedData));
    }

    this.setState(prevState => {
      return {
        options: optionData,
        archived: archivedData
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Main Component Updated");

    // if the list of tasks changes then it stores 
    // the new data in local storage database
    if (prevState.options !== this.state.options) {
      const optionData = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionData);
    }

    // if the list of Completed tasks changes then it stores 
    // the new data in local storage database
    if (prevState.archived !== this.state.archived) {
      const archivedData = JSON.stringify(this.state.archived);
      localStorage.setItem("archived",archivedData);
    }

    // Hides the control panel of buttons if there are no tasks to operate on
    const controlPanel = document.querySelector(".controlPanel");
    if (this.state.options.length === 0) {
      controlPanel.style.display = "none";
    }
    else {
      controlPanel.style.display = "flex";
    }
  };

  componentWillMount = () => {
    Modal.setAppElement("body");
  };

  // method relates to the add option class
  // indexOf finds if there is a match. and if there is the index will be greater than 0
  addItem = item => {

    if (!item) {
      return "Invalid Entry. Please Enter An Option";
    } else if (this.state.options.indexOf(item) > -1) {
      return "This Option Already Exists, Please Enter Another";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([item])
      };
    });
  };

  // takes the prev task and new tasks and changes the list of tasks in the state
  editTask = (newTask, prevTask) => {
    let deletePrevTask = this.state.options.filter(i => i !== prevTask);
    let newTaskList = deletePrevTask.concat([newTask]);
    this.setState(() => ({
      options: newTaskList
    }));
  }

  // takes the prev completed task and new tasks and changes the list of tasks in the state
  editCompletedTask = (newTask, prevTask) => {
    let deletePrevTask = this.state.archived.filter(i => i !== prevTask);
    let newTaskList = deletePrevTask.concat([newTask]);
    this.setState(() => ({
      archived: newTaskList
    }));
  }

  // tasks task to completed if actioned
  completeTask = task => {
    this.setState(prevState => ({
      options: this.state.options.filter(i => i !== task),
      archived: prevState.archived.concat([task]),
    }))
  };

  // method relates to RemoveAll class
  removeAll = () => {
    this.setState((prevState) => ({ options: [] }));
  };

  // removes specific task passed in
  removeOption = option => {
    this.setState((prevState) => ({
      options: this.state.options.filter(i => i !== option)
    }));
  };

    // removes a specific completed task passed in
  removeCompleted = task => {
    this.setState(() => ({
      archived: this.state.archived.filter(i => i !== task)
    }));
  };

  // closes the modal
  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const title = "Task Manager";
    const subtitle = "Create A List of Tasks To Track";

    return (
      <div className="to-do-app">

        <Header
          title={title}
          subtitle={subtitle}
        />

        <AddOption
          state={this.state}
          addOption={this.addItem}
        />

        <ControlPanel
          state={this.state}
          chooseOption={this.chooseOption}
          removeAll={this.removeAll}
        />

        <SubHeader
          subHeading="Tasks"
        />

        <Options
          state={this.state}
          editTask={this.editTask}
          completeTask={this.completeTask}
          removeOption={this.removeOption}
        />

        <SubHeader
          subHeading="Completed Tasks"
        />
        <CompletedTasks
          state={this.state}
          removeCompleted={this.removeCompleted}
          editCompletedTask={this.editCompletedTask}
        />

        <OptionModal
          state={this.state}
          closeModal={this.closeModal}
          selectedOption={this.state.selectedOption}
          contentLabel="Selected Option"
        />

      </div>
    );
  }
}

export default ToDoApp;
