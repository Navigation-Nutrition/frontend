import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap'; 
import IMG_1161 from '../IMGS/IMG_1161.JPG'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../CSS/landingPage.css'
import { NavLink } from 'react-router-dom';


function LandingPage() {
    return (

<div className="Landing">
  <div className="content">
    <div className="text">
      <h1>Become Nutrious</h1>
      <h2>The Fun Way and Easy Way</h2>
      <Button  href="http://localhost:3000/signup" className = "bootstapBut" variant="danger"> Get Started</Button>{}
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
     </div>
     <img className="landingimg" src={IMG_1161} alt="React Image" />
  </div>
  
  <div className = 'd-flex flex-column mb-3'>
    <NavLink to="/quiz" className={'box1'}><FaArrowAltCircleRight /> PLAY NUTRITION GAME </NavLink>
      <div className='box2'><FaArrowAltCircleRight /> NUTRTION NEWS </div>
    <NavLink to="/meal"  className={'box3'} ><FaArrowAltCircleRight /> NUTRTION RECIPES  </NavLink>
     </div> 
  
  
  {/* <div className="action">
    <h3>Responsive Design
  Sed dolor nist, blandit nec lacus dignissim.</h3>
    <h5>Quick Launch
  Sed dolor nist, blandit nec lacus dignissim, sollicitudin elementum erat. Nulla viverra massa vitae diam aliquam ullamcorper.</h5>
    <div className="button">CHECK MORE FEATURES</div>
  </div>  */}
  
      </div>
    );
  }
  export default LandingPage