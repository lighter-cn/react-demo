import React,{ useEffect } from "react";

const HeaderNav = props => {
  useEffect(() => {
    const current = props.mode;
    const nav = document.getElementsByClassName("header__nav");
    for(let i = 0;i < nav[0].children.length;i++){
      current === i ? nav[0].children[i].className = "header__nav-item_current" : nav[0].children[i].className = "header__nav-item";
    }
  });

  return (
  <ul className="header__nav">
    <li className="header__nav-item" onClick={()=>props.setMode(0)}>home</li>
    <li className="header__nav-item" onClick={()=>props.setMode(1)}>articles</li>
    <li className="header__nav-item" onClick={()=>props.setMode(2)}>tools</li>
    <li className="header__nav-item" onClick={()=>props.setMode(3)}>etc</li>
  </ul>);
}

export default HeaderNav;