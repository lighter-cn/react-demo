import { render } from '@testing-library/react';
import React from 'react';

class Good extends React.Component{
  constructor(props){
    super(props);
    this.state = {j: []}
  }

  componentDidMount(){
    fetch("http://localhost:3001/mj/v1/formats")
    .then(res=>res.json())
    .then(res=>{
      this.setState({j: res});
      console.log(this.state.j[0]);
    });
  }

  render(){
    return (
      <>
        <p>hoge</p>
      </>
    );
  }
}

export default Good;