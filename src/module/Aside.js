import React,{ useState } from "react";

const Aside = props => {
  const [mode,setMode] = useState(props.mode);
  return (
    <aside id="aside" className="aside">
      <ul className="aside__nav">
        <li className="aside__nav-item"  onClick={() => setMode(0)}>home</li>
        <li className="aside__nav-item" onClick={() => setMode(1)}>articles</li>
        <li className="aside__nav-item" onClick={() => setMode(2)}>tools</li>
        <li className="aside__nav-item" onClick={() => setMode(3)}>etc</li>
      </ul>
      <p>mode: {mode}</p>
    </aside>
  );
}

export default Aside;