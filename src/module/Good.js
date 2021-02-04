import { render } from '@testing-library/react';
import React from 'react';

class Good extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0}
  }

  countUp = (e) => {
    this.setState({count: this.count + 1})
  }
  
  render(){
    return (
      <button onClick={this.countUp}>count: {this.state.count}</button>
    );
  }
}

export default Good;