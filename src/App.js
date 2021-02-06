import './css/style.css';
import React from "react";
import Header from './module/Header';
import Main from './module/Main';
import Aside from './module/Aside';
import Footer from './module/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;