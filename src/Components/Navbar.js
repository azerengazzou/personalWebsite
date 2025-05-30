import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
// import {CgFileDocument} from "react-icons/cg";
import ReactGA from 'react-ga';


const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);
    const handleNavClick = (label) => {
    ReactGA.event({
        category: 'Navigation',
        action: 'Clicked Nav Link',
        label,
    });
    hideMenu();
    };
    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>AE.</h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={() => handleNavClick('Home')}><Link to="/"><AiOutlineHome /> Home</Link></li>
            <li onClick={() => handleNavClick('About')}><Link to="/About"><AiOutlineHome /> About</Link></li>
            <li onClick={() => handleNavClick('Project')}><Link to="/Project"><AiOutlineHome /> Project</Link></li>

            {/*<li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume<span>Soon</span></Link></li>*/}
        </ul>
        
    </nav>
  )
}

export default Nav