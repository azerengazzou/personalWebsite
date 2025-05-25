import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>AZER ENGAZZOU</b></h1>
          <Typed/>
        </div>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I’m an experienced <b>software developer</b> with a passion for crafting thoughtful,
            user focused digital experiences. Over the years, I’ve brought complex ideas to life 
            building scalable back-end systems and responsive front-end interfaces that don’t just work, but last.
            <br></br>I take pride in writing clean,
            reliable code and designing solutions that solve real problems with purpose and precision.
            <br></br>
            When I’m not immersed in architecture or refining a user flow, you’ll likely find me with a strong cup of coffee, digging into the little details that make great software feel effortless.
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