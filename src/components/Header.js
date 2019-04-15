import React from "react";

const Header = props => (
  <div className="header__container">
    <h1 className="header__title">{props.title}</h1>
    <h4 className="header__subtitle">{props.subtitle}</h4>
  </div>
);

Header.defaultProps = {
  title: "Task Manager",
  subtitle: "Create A List of Tasks To Track"
};

export default Header;
