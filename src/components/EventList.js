import React, { Component } from "react";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.eventName
    };

  }


  render() {
    console.log("props",this.props)
    console.log("state",this.state)
    console.log('hello world')
    
    return (
      <div>
        <p>hello world{this.props.eventName}</p>
        <p>{this.props.eventName}</p>
      </div>
    )
  }
}



export default EventList;
