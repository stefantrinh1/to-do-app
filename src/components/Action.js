import React from "react";

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
export default Action;
