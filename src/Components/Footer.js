import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Azer Engazzou</h4>
      <h4>Copyright &copy; 2024 AE</h4>
      <div className='footerLinks'>
        <a href="https://github.com/azerengazzou" target='_blank'  rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/azer-engazzou/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:engazzouazer1@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer