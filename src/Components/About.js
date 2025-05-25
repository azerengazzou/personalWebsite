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
          <h1 className="AboutTextHeading">Get to <b>know</b> me!</h1>
          <p>
            Hi, I’m <b>Azer Engazzou</b> a software engineer from Tunisia who loves turning complex problems into simple, elegant solutions that people can rely on.  
           <br></br> Since graduating in 2023 from the <b>Polytechnique Private School of Sousse</b> with a degree in <b>Software Engineering</b>, I’ve spent over two years building applications that are not just functional, but scalable and maintainable especially in areas where accuracy and trust really matter.
          </p>
<br></br>
          <p>
            I work mostly with <b>.NET</b> and <b>React</b>, and I’m passionate about writing clean code that stands the test of time. Following principles like <b>SOLID</b> and using proven design patterns helps me create software that’s both reliable and easy to grow.  
            I also enjoy streamlining the development process with smart <b>CI/CD pipelines</b>, so teams can ship features faster without sacrificing quality.
          </p>
<br></br>
          <p>
            Right now, I’m diving into <b>.NET MAUI</b> to build smooth, cross-platform mobile apps always eager to learn and expand what I can offer.  
            I’m open to collaborations and new opportunities where I can contribute, learn, and make a real difference.
          </p>

          <p>
            When I’m not coding, you’ll often find me exploring new tech or perfecting my workflow usually with a good cup of coffee in hand.  
            If you’d like to connect or chat, my contact links are down in the footer. I’d love to hear from you!
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