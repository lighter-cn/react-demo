import React from "react";
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import Tools from "./Tools/Tools";
import Labo from "./Labo/Labo"
import Etc from "./Etc/Etc";


const Main = props => {
  let main_content;
  if(props.mode === 0){
    main_content = <Home />;
  }else if(props.mode === 1){
    main_content = <Articles />; 
  }else if(props.mode === 2){
    main_content = <Tools />;
  }else if(props.mode === 3){
    main_content = <Labo />
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