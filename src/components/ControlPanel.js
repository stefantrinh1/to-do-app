
import React from "react";
import Action from "./Action";
import RemoveAll from "./RemoveAll";

const ControlPanel = props => (
    <div className="controlPanel">
    
        <Action
            state={props.state}
            chooseOption={props.chooseOption}
        />

        <RemoveAll
            state={props.state}
            removeAll={props.removeAll}
        />

    </div>
)

export default ControlPanel;

