import React, { Component } from 'react'
import '../../styles/career.scss'
export default class Career extends Component {
  render() {
    return (
      <section className='career'>
        <div className='c-cont'>
        <aside>
        <span className='c-title'>The <span>Jist</span></span>
        <p>I'm a military veteran and software developer.</p>
        <p>i inspire and get inspired through software. i've been building things since the golden age of tumblr.</p>
        <p>view my latest project "libre" (<a href='https://github.com/AJ-Brown-InTech?tab=repositories'>open source for now</a>)</p>
        <a>view my resume</a>
        </aside>
          <article className='c-img'></article> 
        </div>
      </section>
    )
  }
}
