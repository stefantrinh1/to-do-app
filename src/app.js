import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./components/ToDoApp";
console.log("app.js loaded");

ReactDOM.render(<ToDoApp options={[]} />, document.getElementById("app"));
