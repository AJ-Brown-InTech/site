import React, { Component } from 'react'
import '../../styles/navbar.scss'
//import Menu from '../../lib/menu'
interface Props{
  setting: string
  mode:boolean
  toggleFunc: any
  settingFunc: any
}



export default class Navbar extends Component <Props>{
constructor(props: Props){
  super(props)
}


  render(){
    
   console.log(this.props)
    return (
    <div className="navbar" >
      <section className="nav-op1" 
      style={{border: (this.props.setting == "Light"? '1px solid black': '1px solid whitesmoke')}} onClick={()=>{this.props.toggleFunc(); this.props.settingFunc()}}>
      {this.props.setting}
      </section>
      {/* <section className="nav-op2"><Menu/></section> */}
    </div>
    )
  }
}


