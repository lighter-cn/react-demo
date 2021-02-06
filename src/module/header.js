import React from 'react';
import Menu from "./Menu";

class Header extends React.Component{
  render(){
    return(
      <header id="header" className="header">
        <h1 className="header__title">Project Ninja</h1>
        <p className="header__txt">おもしろいをつくる</p>
        <Menu />
      </header>
    );
  }
}

export default Header;