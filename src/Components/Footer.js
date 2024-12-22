import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Azer Engazzou</h4>
      <h4>Copyright &copy; 2024 AE</h4>
      <div className='footerLinks'>
        <a href="https://github.com/azerengazzou" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/azer-engazzou/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:engazzouazer1@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer