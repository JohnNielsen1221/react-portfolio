import React from 'react'
import headshot from '../../assets/bright-headshot-small.jpg'

const About = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>Pleased to meet you. Hope you guessed my name...</h1>
      <img src={headshot} className='my-2' style={{ width: '25%' }} alt='headshot' />
      <p className='about'>
        {`While everything went bonkers in 2020, it gave me the opportunity to step back and see where I wanted to be and what I wanted to do. I love learning. I love teaching. I love collaberating. It seems that the things I love all lead to Web Development. So here I am, ready to apply my continuingly growing skills.

          As I have progressed through my career as an adult human, I have found that while all my past positions have been connected where one leads to the other, they have all been very different. Different in their duties; Different in their fields; Different in their environments. This diverse employment history has been a blessing and a curse. On one hand, I know a lot of things about a lot of things. On the other, however, it was hard for me to decide how I want to proceed with my professional career moving forward.

          Enter Web Development.
          
          Since starting as a full-time Software Engineer, I am continuously surprised by how much I enjoy what I do. Working with other developers has been the highlight of my career so far, and I can't wait to continue to grow and learn from those around me. `}

      </p>
    </section>
  )
}

export default About
