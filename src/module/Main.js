import React from "react";
import Content from "./Content";
import Home from "./Home";
import Articles from "./Articles";


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      main: "home"
    }
  };
  render (){
    return (
      <main id="main" className="main">
        <div className="contents">
          <h2 className="main__title">main title</h2>
          <p className="main__txt">this is sample text. hello, everyone.</p>
        </div>
        <Home />
        <Articles />
        <div className="contents">
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