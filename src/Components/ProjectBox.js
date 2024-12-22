import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
      RepertoirePlusDesc : "Phone book mobile app, detection and saving the user location.",
      RepertoirePlusSkills: "Android Studio - XML",
      RepertoirePlusGithub : "https://github.com/azerengazzou/",
      RepertoirePlusWebsite : "",
      
      SchoolManagementDesc : "Desktop application for primary school management- Administrator CRUD.",
      SchoolManagementSkills: "Java Swing",
      SchoolManagementGithub : "https://github.com/azerengazzou/",
      SchoolManagementWebsite : "",
      
      QuizDesc: "Tech Quiz - Quiz on the general knowledge of computer science students, developed without the use of libraries or frameworks.",
      QuizSkills: "OpenTrivia API - JavaScript - CSS",
      QuizGithub: "https://github.com/azerengazzou/Quiz",
      QuizWebsite: "https://serene-borg-1313a7.netlify.app",
      
      ECommerceITDesc:"E-commerce website for computer equipments selling; stock management, product management and market basket",
      ECommerceITSkills: "Spring Boot - Bootstrap - MySQL",
      ECommerceITGithub: "https://github.com/azerengazzou/EcommerceSpringboot",
      ECommerceITWebsite: "",

      ClubEventsDesc:"Design and development of a web platform to present the various student clubs and school events",
      ClubEventsSkills: "Laravel 8 - React Js - SqlServer",
      ClubEventsGithub: "https://github.com/azerengazzou/Events_Project-React-Laravel-",
      ClubEventsWebsite: "",

      SABOEGDesc:"Design and development of a showcase website to present the services of the electricity company SABOEG",
      SABOEGSkills: "React JS - Adobe Photoshop",
      SABOEGGithub: "",
      SABOEGWebsite: "",

      TrefleDesc:"Development of a showcase website to present the gallery and the services of an interior design agency TREFLE",
      TrefleSkills: "Wordpress - Elementor",
      TrefleGithub: "https://github.com/azerengazzou/trefle",
      TrefleWebsite: "",

      CareerBuilderDesc:"Design and development of a multilanguage web application to provide users with a resume builder easy to use ( drag and drop ), resume can be downloaded in a pdf/json format.",
      CareerBuilderSkills: "React JSX - CI/CD",
      CareerBuilderGithub: "https://github.com/azerengazzou/SH_Career",
      CareerBuilderWebsite: "https://careerbuilder-v1.netlify.app",
  }

  let show = '';
  if(desc[projectName + 'Github']=== ""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox