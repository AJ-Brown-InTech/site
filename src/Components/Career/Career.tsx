import React, { Component } from 'react'
import '../../styles/career.scss'
export default class Career extends Component {
  render() {
 let pdf = '../../AJBrownCV.pdf'

    return (

      
      <section className='career'>
        <div className='c-cont'>
        <article>
        <span className='c-title'>The <span>jist</span></span>
        <p>I'm a military veteran and software developer.</p>
        <p>i inspire and get inspired through software. i've been building things since the golden age of tumblr.</p>
        <p>view my latest project "libre" (<a href='https://github.com/AJ-Brown-InTech?tab=repositories'>open source for now</a>)</p>
        <a href='https://drive.google.com/file/d/1gbGrgy20p9K1nUKKZ7011CEGefQvvG9y/view?usp=share_link' target='_blank' download>view my resume</a>
        </article>
          <article className='c-img' ></article> 
        </div>
      </section>
    )
  }
}
