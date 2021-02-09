import './css/style.css';
import React, { useState } from "react";
import Header from './module/Header/Header';
import Main from './module/Main/Main';
import Aside from './module/Aside/Aside';
import Footer from './module/Footer/Footer';

function App() {
  const [mode, setMode] = useState(0);
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} />
      <div className="container">
        <Aside mode={mode} setMode={setMode}/>
        <Main mode={mode}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;