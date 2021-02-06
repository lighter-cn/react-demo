import React from 'react';
import HeaderNav from "./HeaderNav";

class Header extends React.Component{
  render(){
    return(
      <header id="header" className="header">
        <div className="header__left">
          <h1 className="header__title">Project Ninja</h1>
          <p className="header__txt">Fun JavaScript</p>
        </div>
        <HeaderNav />
      </header>
    );
  }
}

export default Header;