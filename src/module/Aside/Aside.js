import React,{ useEffect } from "react";

const Aside = props => {
  useEffect(()=>{
    const current = props.mode;
    const nav = document.getElementsByClassName("aside__nav");
    for(let i = 0;i < nav[0].children.length;i++){
      current === i ? nav[0].children[i].className = "aside__nav-item_current" : nav[0].children[i].className = "aside__nav-item";
    }
  })
  return (
    <aside id="aside" className="aside">
      <ul className="aside__nav">
        <li className="aside__nav-item" onClick={()=>props.setMode(0)}>home</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(1)}>articles</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(2)}>tools</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(3)}>labo</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(4)}>etc</li>
      </ul>
    </aside>
  );
}

export default Aside;