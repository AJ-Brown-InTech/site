import React, { Component } from 'react'
import '../../styles/career.scss'
export default class Career extends Component {
  render() {
 let pdf = '../../AJBrownCV.pdf'

    return (

      
      <section className='career'>
        <div className='c-cont'>
        <article className='carrer-box'>
        <span className='c-title'>The <span>jist</span></span>
        <p className='c-txt'>I'm a military veteran and software developer.</p>
        <p className='c-txt'>i inspire and get inspired through software. i've been building things since the golden age of tumblr.</p>
        <p className='c-txt'>view my latest project "libre" (<a href='https://github.com/AJ-Brown-InTech?tab=repositories'>open source for now</a>)</p>
        <a href='https://drive.google.com/file/d/1ebNayFMyd8zieYhxyNHYPbDw4q9LnCvH/view?usp=share_link' target='_blank' download>view my resume</a>
        </article>
          <article className='c-img' ></article> 
        </div>
      </section>
    )
  }
}
