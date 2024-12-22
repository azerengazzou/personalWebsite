import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>AZER ENGAZZOU</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I thrive on transforming ideas into functional, user-centric applications
            that solve real-world problems. With a solid foundation in <b>software architecture</b>
            and <b>design patterns</b>, including the principles of <b>SOLID</b>, I specialize in
            <b>.NET</b> and <b>React</b>, building robust back-end systems and dynamic, responsive
            front-end interfaces.<br/>
            My goal is to create seamless, scalable, and maintainable systems that deliver long-term impact.<br/><br/>
            I’m also highly proficient in <b>CI/CD pipelines</b>, ensuring efficient development and
            deployment workflows. I am currently exploring <b>MAUI</b> to broaden my mobile development
            expertise, while continuing to refine my understanding of advanced architectural concepts, microservices,
            and scalable system design.<br/><br/>
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale: "1.5", rotate: "15deg"}}/>
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt=""/>
        </Tilt>
      </div>
    </div>
  )
}

export default Home