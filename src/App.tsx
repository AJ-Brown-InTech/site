// * load components and Depedencies
import React, { Component } from 'react'
import { Interface } from 'readline';
import Navbar from './Components/Navbar/Navbar'
import Bio from './Components/Bio/Bio'
import Header from './Components/Header/Header'
import Career from './Components/Career/Career'
import Footer from './Components/Footer/Footer'
import './styles/main.scss'

// interface State {
//   mode:boolean
//   setting: string
//   toggleFunc: any
//   settingFunc: any
// }

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
        <div  className=' Main' style={{backgroundColor:(this.state.mode ==true? 'whitesmoke': 'black'),color: this.state.mode == true? 'black': 'whitesmoke'}}>
    
          <Navbar setting={this.state.setting} mode={this.state.mode} toggleFunc={onclick=()=>this.setState({mode:!this.state.mode})} settingFunc={onclick=()=> this.SettingsSync()}/> 
          <Header/>
          <Bio/>
          <Career/>
          <Footer/>
        </div>
      )
    }
}

