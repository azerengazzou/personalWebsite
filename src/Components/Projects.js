import React from 'react';
import ProjectBox from './ProjectBox';
import Imagenotfound from '../images/Imagenotfound.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>personal projects</b></h1>
      <div className='project'>
          <ProjectBox projectPhoto={Imagenotfound} projectName="Trefle" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="CareerBuilder" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="RepertoirePlus" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="SchoolManagement" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="Quiz" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="ECommerceIT" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="ClubEvents" />
          <ProjectBox projectPhoto={Imagenotfound} projectName="SABOEG" />

      </div>
    </div>
  )
}

export default Projects