import React from "react";

const SubHeader = props => (
  <div className="sub__header">
  <h2>{props.subHeading}</h2>
  </div>
);

SubHeader.defaultProps = {
  subHeading: "Sub Heading"
};

export default SubHeader;
