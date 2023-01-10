import React, { Component } from 'react';
import '../../styles/footer.scss'

export default class componentName extends Component {
  render() {
    return (
  <footer className='footer'>
    <section className='f-cont'>
        <article className='f-git' >get <span style={{color:'crimson'}}>in</span> touch</article>
        <article className='f-links'>
          <ul><a href='https://github.com/AJ-Brown-InTech'>Github</a></ul>
          <ul><a href='https://www.linkedin.com/in/ajtbrown/'>linkedin</a></ul>
          <ul>ajalantbrown@gmail.com</ul>
          <ul>made in austin</ul>
        </article>
  </section>
  
  </footer>
    );
  }
}
