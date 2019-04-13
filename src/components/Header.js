import React from "react";

const Header = props => (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );

Header.defaultProps = {
  title: "Indecision",
  subtitle: "Choose what you want to do today."
};

export default Header;
