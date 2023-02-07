import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap'; 
import IMG_1161 from './IMGS/IMG_1161.JPG'
import { FaArrowAltCircleRight } from 'react-icons/fa';


function App() {
  return (
    <div classNameName="App">
        <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <input type="password" name="firn" placeholder="First Name" required />
            <input type="password" name="lasn" placeholder="Last Name" required />
            <button>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="UserName" placeholder="UserName" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button>Login</button>
          </form>
        </div>
{/* <div className="header">
  <div className="title"> NAVIGATION NUTRITION</div>
  
  <div className="nav">
    <div className="item" > Nutrition</div>
    <div className="item"> Community</div>
  </div>
</div>
 
<div className="content">
  <div className="text">
    <h1>Become Nutrious</h1>
    <h2>The Fun Way and Easy Way</h2>
    <Button className = "bootstapBut" variant="danger">Get Started</Button>{' '}
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
   </div>
   <img className="img" src={IMG_1161} alt="React Image" />
</div>

<div className = 'd-flex flex-column mb-3'>
    <div className='box1'><FaArrowAltCircleRight /> PLAY NUTRITION GAME</div>
    <div className='box2'><FaArrowAltCircleRight /> NUTRTION NEWS </div>
    <div className='box3'><FaArrowAltCircleRight /> NUTRTION RECIPES</div>
   </div> */}


{/* <div className="action">
  <h3>Responsive Design
Sed dolor nist, blandit nec lacus dignissim.</h3>
  <h5>Quick Launch
Sed dolor nist, blandit nec lacus dignissim, sollicitudin elementum erat. Nulla viverra massa vitae diam aliquam ullamcorper.</h5>
  <div className="button">CHECK MORE FEATURES</div>
</div> */}


{/* <div className="footer">
&copy; NAVIGATION NUTRITION all rights reserved
</div> */}


    </div>
    </div>
  );
}

export default App;

