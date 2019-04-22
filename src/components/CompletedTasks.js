import React from "react";
import CompletedTask from "./CompletedTask";

class CompletedTasks extends React.Component {

render() {
    let listCompleted = this.props.state.archived.map((completed, index) => (
    <div className="sub__listContainer list__container">
            <CompletedTask state={this.props.state} value={completed} removeCompleted={this.props.removeCompleted} />
    </div>
    ))
    return listCompleted;
}
}


export default CompletedTasks;
