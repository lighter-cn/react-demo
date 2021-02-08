import React from 'react';
import HeaderNav from "./HeaderNav";
import HeaderToggle from "./HeaderToggle";

const Header = props => {
  return(
    <header id="header" className="header">
      <div className="header__left">
        <h1 className="header__title">Project Ninja</h1>
        <p className="header__txt">Fun JavaScript</p>
      </div>
      <div className="header__right">
        <HeaderNav />
        <HeaderToggle />
      </div>
    </header>
  );
}

export default Header;