import React, { Component } from 'react'
import './styles/main.scss'

export default class  App extends Component {
  state = { 
    mode: true
  };


render() {
 
      return (
        <div className=' Main' style={{backgroundColor:(this.state.mode ==true? 'whitesmoke': 'black'),
        color: this.state.mode == true? 'black': 'whitesmoke'}}>
          
          <div onClick={()=>this.setState({mode:!this.state.mode})}>{this.state.mode == true ? 'Light': 'Dark'}</div>
        </div>
      )
    }
}

