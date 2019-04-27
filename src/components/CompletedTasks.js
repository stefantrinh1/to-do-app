import React from "react";
import CompletedTask from "./CompletedTask";

class CompletedTasks extends React.Component {

    render() {
        let listCompleted = this.props.state.archived.map((completed, index) => (
            <div className="sub__listContainer list__container">

                <CompletedTask
                    state={this.props.state}
                    value={completed}
                    key={completed}
                    removeCompleted={this.props.removeCompleted}
                    editCompletedTask={this.props.editCompletedTask}
                />

            </div>
        ))
        return listCompleted;
    }
}


export default CompletedTasks;
