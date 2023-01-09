import React, { Component } from 'react'
import '../../styles/navbar.scss'

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
      <section className="nav-op1">
        Logo
      </section>
      <section className="nav-op2">Options</section>

      <section onClick={()=>{this.props.toggleFunc(); this.props.settingFunc()}}className="nav-op3"><span>{this.props.setting}</span></section>
    </div>
    )
  }
}


