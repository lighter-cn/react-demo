import React from "react";

const HeaderNav = props => {
  return (
  <ul className="header__nav">
    <li className="header__nav-item" onClick={()=>props.setMode(0)}>home</li>
    <li className="header__nav-item" onClick={()=>props.setMode(1)}>articles</li>
    <li className="header__nav-item" onClick={()=>props.setMode(2)}>tools</li>
    <li className="header__nav-item" onClick={()=>props.setMode(3)}>etc</li>
  </ul>);
}

export default HeaderNav;