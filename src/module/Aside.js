import React from "react";

const Aside = props => {
  return (
    <aside id="aside" className="aside">
      <ul className="aside__nav">
        <li className="aside__nav-item">home</li>
        <li className="aside__nav-item">articles</li>
        <li className="aside__nav-item">tools</li>
        <li className="aside__nav-item">etc</li>
      </ul>
    </aside>
  );
}

export default Aside;