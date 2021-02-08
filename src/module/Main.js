import React from "react";
import Home from "./Main/Home/Home";
import Articles from "./Main/Articles/Articles";
import Tools from "./Main/Tools/Tools";
import Etc from "./Main/Etc/Etc";


const Main = props => {
  let main_content;
  if(props.mode === 0){
    main_content = <Home />;
  }else if(props.mode === 1){
    main_content = <Articles />; 
  }else if(props.mode === 2){
    main_content = <Tools />; 
  }else{
    main_content = <Etc />; 
  }
  return (
    <main id="main" className="main">
      { main_content }
    </main>
  );
}

export default Main;