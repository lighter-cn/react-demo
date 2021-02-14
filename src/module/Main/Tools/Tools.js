import React from "react";
import Tool1 from "./Tool1";

const Tools = props => {
  return(
    <section className="tools">
      <h2 className="tools__title">tools</h2>
      <p className="tools__txt">JavaScriptで自作したツール置き場</p>
      <Tool1 />
    </section>
  );
}

export default Tools;