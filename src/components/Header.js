import React from "react";

const Header = props => (
  <div className="header__container">
    <h1 className="header__title">{props.title}</h1>
    <h4 className="header__subtitle">{props.subtitle}</h4>
  </div>
);

Header.defaultProps = {
  title: "Indecision",
  subtitle: "Choose what you want to do today."
};

export default Header;
