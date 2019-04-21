import React from "react";
import CompletedTask from "./CompletedTask";

const CompletedTasks = props => (
    <div className="sub__listContainer">
        <h2>Completed Tasks</h2>
        <ul className="list__container">
            <CompletedTask state={props.state} removeCompleted={props.removeCompleted} />
        </ul>
    </div>
  )


export default CompletedTasks;
