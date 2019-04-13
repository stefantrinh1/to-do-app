import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./components/ToDoApp";
import OptionModal from "./components/Modal"
console.log("app.js loaded");

ReactDOM.render(<ToDoApp options={[]} />, document.getElementById("app"));
// ReactDOM.render(<OptionModal/>, document.getElementById("app"));
