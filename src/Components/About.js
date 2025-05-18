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
            Hi, I'm <b>Azer Engazzou</b> a passionate Software Engineer from Tunisia.  I hold a degree in
             <b>Software Engineering</b> from <b>Polytechnique private school of Sousse</b>, where I graduated in 2023.<br/><br/>
            With <b> over 2 years of experience</b> in full-stack development, I specialize in <b>.NET</b>
            and <b>React</b>.  I’m dedicated to building scalable, maintainable applications and have a strong foundation in
             <b>design patterns, SOLID principles</b> and implementing <b>efficient CI/CD pipelines.</b>
             Currently, I'm expanding my skill set by exploring <b>.NET MAUI</b> for cross-platform mobile development.<br/>
              I'm always open to <b>collaborations</b> and <b>new 
              opportunities</b> where I can contribute meaningfully
               and continue growing professionally. <br/>Feel free
                to reach out contact links are available in the footer.

              When I'm not coding, I enjoy discovering new technologies and refining development workflows to boost efficiency and quality.
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