import React, { Component } from 'react'
import { Interface } from 'readline';
import Navbar from './Components/Navbar/Navbar'
import './styles/main.scss'

interface State {
  mode:boolean
  setting: string
  toggleFunc: any
  settingFunc: any
}

export default class  App extends Component{
  state = { 
    mode: true,
    setting: 'Light'
  }


  SettingsSync(){
    if(this.state.mode == true){
      return this.setState({setting: 'Light'})
    }
    else {
     return  this.setState({setting:'Dark'})
    } 
  }
render() {
      return (
        <div className=' Main' style={{backgroundColor:(this.state.mode ==true? 'whitesmoke': 'black'),color: this.state.mode == true? 'black': 'whitesmoke'}}>
         <Navbar setting={this.state.setting} mode={this.state.mode} toggleFunc={onclick=()=>this.setState({mode:!this.state.mode})} settingFunc={onclick=()=> this.SettingsSync()}/>
        </div>
      )
    }
}

