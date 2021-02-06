import React from "react";
import Content from "./Content";


class Main extends React.Component{
  render (){
    return (
      <main id="main" className="main">
        <h2 className="main__title">main title</h2>
        <p className="main__txt">this is sample text. hello, everyone.</p>
        <div className="contents">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </main>
    );
  }
}

export default Main;