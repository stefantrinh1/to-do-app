import React from "react";
import ReactDOM from "react-dom";

console.log("app.js loaded");
class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    let stringData = [];

    let pulledData = localStorage.getItem("options");
    if (pulledData !== null) {
      stringData = this.props.options.concat(JSON.parse(pulledData));
    }

    this.state = {
      options: stringData
    };
  }
  // method to choose an option
  chooseOption() {
    var chosenOption = this.state.options;
    alert(
      "I recommend doing this today: " +
        chosenOption[Math.floor(Math.random() * chosenOption.length)]
    );
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const optionData = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionData);
    }
  }

  componentWillUnmount() {}

  // method relates to the add option class
  // indexOf finds if there is a match. and if there is the index will be greater than 0
  addItem(item) {
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
  }

  // method relates to RemoveAll class
  removeAll() {
    this.setState(() => ({ options: [] }));
  }

  removeOption(option) {
    this.setState(() => ({
      options: this.state.options.filter(i => i !== option)
    }));
  }

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

let optionsList = [];

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
  subtitle: "Choose what you want to do today."
};

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

const Action = props => {
  return (
    <div>
      <button
        disabled={props.state.options.length === 0}
        onClick={props.chooseOption}
      >
        What Should I do
      </button>
    </div>
  );
};

const RemoveAll = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>
    </div>
  );
};

const Options = props => {
  return (
    <ul>
      <Option state={props.state} removeOption={props.removeOption} />
    </ul>
  );
};

class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(item) {
    this.props.removeOption(item);
  }

  render() {
    let listOptions = this.props.state.options.map((option, index) => (
      <div key={"option" + (parseInt(index) + 1)}>
        <li> {option} </li>{" "}
        <button
          name="option"
          onClick={() => {
            this.removeItem(option);
          }}
        >
          Remove
        </button>
      </div>
    ));

    return listOptions;
  }
}

ReactDOM.render(<ToDoApp options={[]} />, document.getElementById("app"));
