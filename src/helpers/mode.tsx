import React, { Component } from 'react'

export default class mode extends Component {
    
    state = { 
        mode: true
    };

  render() {
let setting 

this.state.mode == true ? setting = 'light': setting = 'dark'

    return (
      <div className={setting} onClick={()=>this.setState({mode:!this.state.mode})}>
        <text>{this.state.mode == true ? 'Light': 'Dark'}</text>
      </div>
    )
  }
}
