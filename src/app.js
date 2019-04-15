import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./components/ToDoApp";
import "normalize.css/normalize.css";
import "./styles/default.scss";
console.log("app.js loaded");

ReactDOM.render(<ToDoApp options={[]} />, document.getElementById("app"));
