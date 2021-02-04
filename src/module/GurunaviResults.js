import React from 'react'

class GurunaviResults extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="g-result">
        <h2><a href={this.props.url}>{this.props.name}</a></h2>
        <p>{this.props.address}</p>
        <p>{this.props.tel}</p>
      </div>
    );
  }
}

export default GurunaviResults;