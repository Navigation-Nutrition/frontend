import '../CSS/Navbar.css'
 import { NavLink } from 'react-router-dom';

function Navbar(){
  <h1>hello world</h1>
//   <div className="header">
//     hello world
//   <div className="title" > NAVIGATION NUTRITION</div>
  
//   <div className="nav">
//   <NavLink to="/todo" className={"item"}> Nutrition </NavLink>
//     {/* <Link to="/">Home</Link> */}
//     {/* <div className="item"> Community</div> */}
//     <NavLink to="/todo" className={"item"}> Community </NavLink>
//   </div>
// </div>
}

// export default Navbar
function Nav(){
  return (
  <div className="header">
  <NavLink to="/" style={{ color:"#000350", textDecoration: 'none'}} className="title" > NAVIGATION NUTRITION </NavLink>
  
  <div className="nav">
  <NavLink to="/todo" style={{color:"#000350", textDecoration: 'none'}} className={"item"}> Nutrition </NavLink>
    {/* <Link to="/">Home</Link> */}
    {/* <div className="item"> Community</div> */}
  <NavLink to="/blog" style={{color:"#000350", textDecoration: 'none'}} className={"item"}> Community </NavLink>
  </div>
</div>
  )
}

export default Nav