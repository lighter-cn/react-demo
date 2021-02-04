import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: new Date()}
  }

  componentDidMount(){
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({time: new Date()});
  }

  render(){
  const time = (this.state.time).toLocaleTimeString();
    return(
      <>
        <p>{time}</p>
      </>
    );
  }
}

export default Timer;