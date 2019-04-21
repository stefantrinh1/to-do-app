import React from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel"
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./Modal";
import Modal from "react-modal";
import CompletedTasks from "./CompletedTasks"

class ToDoApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    archived:[]
  };

  // method to choose an option
  chooseOption = () => {
    let Options = this.state.options;
    let chosenOption = Options[Math.floor(Math.random() * Options.length)];
    this.setState(prevState => {
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
        archived:archivedData
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const optionData = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionData);
    }

    if (prevState.archived.length !== this.state.archived.length) {
      const archivedData = JSON.stringify(this.state.archived);
      localStorage.setItem("archived",archivedData);
    }
    const controlPanel = document.querySelector(".controlPanel");
    if(this.state.options.length === 0){
      controlPanel.style.display = "none";
    }
    else{
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

  completeTask = task => {
    this.setState(prevState => ({
        options: this.state.options.filter(i => i !== task),
        archived: prevState.archived.concat([task]),
      } ))
  };

  // method relates to RemoveAll class
  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };

  removeOption = option => {
    this.setState(() => ({
      options: this.state.options.filter(i => i !== option)
    }));
  };

  removeCompleted = task => {
    this.setState(() => ({
      archived: this.state.archived.filter(i => i !== task)
    }));
  };

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
        <Header title={title} subtitle={subtitle} />
        <AddOption state={this.state} addOption={this.addItem} />
        <ControlPanel state={this.state} chooseOption={this.chooseOption}  removeAll={this.removeAll} />
        <Options state={this.state} completeTask={this.completeTask} removeOption={this.removeOption} />
        <CompletedTasks state={this.state} removeCompleted={this.removeCompleted} />
        <OptionModal
          state={this.state}
          closeModal={this.closeModal}
          selectedOption={this.state.selectedOption}
          contentLabel="Selected Option"
        />
        {/* <RemoveOption state={this.state} removeOption={this.removeOption} /> */}
      </div>
    );
  }
}

export default ToDoApp;
