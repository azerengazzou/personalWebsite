import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Azer Engazzou</b> and I am from Tunisia. I am a <b>Software Engineer</b>
            with a degree from <b>Ecole Polytechnique Sousse</b>, graduated in August 2023.<br/><br/>
            With over <b>2 years of experience</b> in full-stack development, I specialize in <b>.NET</b>
            and <b>React</b>. I enjoy building scalable, maintainable systems and am skilled in design patterns,
            SOLID principles, and efficient CI/CD pipelines. Currently, I’m expanding my knowledge in <b>MAUI</b>
             for mobile development.<br/><br/>
            I am <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free
            to connect with me—links are in the footer.<br/>
            Apart from coding, I enjoy exploring new technologies and optimizing workflows.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
                className="illustration"
                animationData={Coder}
                loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='C#'/>
        <Skills skill='Javascript'/>
        <Skills skill='Typescript'/>
        <Skills skill='Php'/>
        <Skills skill='React'/>
        <Skills skill='Bootstrap'/>
        <Skills skill='SQL'/>
        <Skills skill='SQLServer'/>
        <Skills skill='MAUI'/>
        <Skills skill='Postman'/>
        <Skills skill='AzureCloud'/>
        <Skills skill='AzureDevops'/>
        <Skills skill='Git'/>
        <Skills skill='Github'/>
        <Skills skill='Npm'/>
        <Skills skill='Wordpress'/>
        <Skills skill='Figma'/>
      </div>
    </>
  )
}

export default About