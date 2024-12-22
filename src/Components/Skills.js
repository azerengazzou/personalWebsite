import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import {SiPostman, SiDotnet} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandXamarin } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";

const Skills = ({skill}) => {
    const icon = {
        'C#': <TbBrandCSharp/>,
        Javascript: <DiJavascript1/>,
        Typescript: <SiTypescript/>,
        Php: <FaPhp/>,
        DotNet: <SiDotnet/>,
        React: <FaReact/>,
        Bootstrap: <FaBootstrap/>,
        SQL: <AiOutlineConsoleSql/>,
        SQLServer: <DiMsqlServer/>,
        MAUI: <TbBrandXamarin/>,
        Postman: <SiPostman/>,
        AzureCloud: <VscAzure/>,
        AzureDevops: <VscAzureDevops/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Wordpress : <FaWordpress/>,
        Figma : <FaFigma/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
