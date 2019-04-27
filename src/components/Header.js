import React from "react";

const Header = props => (
  <div className="header__container">
    <h1 className="header__title">{props.title}</h1>
    <h4 className="header__subtitle">{props.subtitle}</h4>
  </div>
);

Header.defaultProps = {
  title: "Pearldrop Handmade",
  subtitle: "Hand made pearls designed with passion."
};

export default Header;
