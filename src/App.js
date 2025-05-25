import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import HashLoader from "react-spinners/HashLoader";
import { Cursor } from "./Components/Cursor";
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-VCWH0047W9';
export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const location = useLocation();
  useEffect(() => {
      initGA();
    }, []);

    useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        top: event.clientY + window.scrollY,
        left: event.clientX + window.scrollX,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <>
        <Cursor top={cursorPosition.top} left={cursorPosition.left} />
        {loading ? (
            <div className="loader">
              <HashLoader
                  color={'#9067C6'}
                  loading={true}
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
              />
            </div>
        ) : (
            <div>
              <Nav />
              <MoveToTop />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Resume" element={<Resume />} />
              </Routes>

              <Footer />
            </div>
        )}
      </>
  );
}

export default App;
