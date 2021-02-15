import React from 'react';
import HeaderNav from "./HeaderNav";
import HeaderToggle from "./HeaderToggle";

const Header = props => {
  return(
    <header id="header" className="header">
      <div className="header__left">
        <h1 className="header__title">Project Ninja</h1>
        <p className="header__txt">Fun JavaScript and Python.</p>
      </div>
      <div className="header__right">
        <HeaderNav mode={props.mode} setMode={props.setMode}/>
        <HeaderToggle />
      </div>
    </header>
  );
}

export default Header;