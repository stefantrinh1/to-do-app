import React from "react";

const Action = props => (
  <div className="action__btn">
    <button
      disabled={props.state.options.length === 0}
      onClick={props.chooseOption}
    >
      Select A Task
    </button>
  </div>
);
export default Action;
