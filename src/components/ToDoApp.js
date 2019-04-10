import React from "react";
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import RemoveAll from "./RemoveAll";
import OptionModal from "./Modal";

class ToDoApp extends React.Component {
  state = {
    options: []
  };

  // method to choose an option
  chooseOption = () => {
    var chosenOption = this.state.options;
    OptionModal();
    // alert(
    //   "I recommend doing this today: " +
    //     chosenOption[Math.floor(Math.random() * chosenOption.length)]
    // );
  };

  componentDidMount = () => {
    let stringData = [];
    let pulledData = localStorage.getItem("options");
    console.log(pulledData);
    if (pulledData !== null) {
      stringData = this.props.options.concat(JSON.parse(pulledData));
    }
    this.setState(prevState => {
      return {
        options: stringData
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const optionData = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionData);
    }
  };

  componentWillUnmount = () => {};

  // method relates to the add option class
  // indexOf finds if there is a match. and if there is the index will be greater than 0
  addItem = item => {
    if (!item) {
      return "invalid. please enter an option";
    } else if (this.state.options.indexOf(item) > -1) {
      return "this option already exists";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([item])
      };
    });
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

  render() {
    const title = "Welcome To Your To Do Application";
    const subtitle = "Create A Do List and Let The Computer Pick Your Actions";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options state={this.state} removeOption={this.removeOption} />
        <AddOption state={this.state} addOption={this.addItem} />
        <Action state={this.state} chooseOption={this.chooseOption} />
        <RemoveAll state={this.state} removeAll={this.removeAll} />
        {/* <RemoveOption state={this.state} removeOption={this.removeOption} /> */}
      </div>
    );
  }
}

export default ToDoApp;