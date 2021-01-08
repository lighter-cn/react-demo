import React from 'react';

const API_KEY = process.env.REACT_APP_GURUNAVI_KEY;
console.log(API_KEY);

class Header extends React.Component{
  render(){
    return(
      <header>
        <p>header</p>
      </header>
    );
  }
}

export default Header;