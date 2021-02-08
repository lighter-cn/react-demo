import React,{ useState,useEffect } from "react";

const Aside = props => {
  return (
    <aside id="aside" className="aside">
      <ul className="aside__nav">
        <li className="aside__nav-item" onClick={()=>props.setMode(0)}>home</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(1)}>articles</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(2)}>tools</li>
        <li className="aside__nav-item" onClick={()=>props.setMode(3)}>etc</li>
      </ul>
    </aside>
  );
}

export default Aside;