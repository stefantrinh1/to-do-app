import React from "react";

const RemoveAll = props => {
  return (
    <div>
      <button onClick={props.removeAll}>Remove All</button>
    </div>
  );
};

export default RemoveAll;
