import React from "react";
import {Navbar,Nav,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';



const NavBar = () => (
  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link to="/" style={{color:"#ffffff",textDecoration:"none"}}>WEBDEV</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/" style={{color:"#ffffff",textDecoration:"none"}}>Home</Link></Nav.Link>
      <Nav.Link ><Link  to="/about" style={{color:"#ffffff",textDecoration:"none"}}>About</Link></Nav.Link>
      <Nav.Link><Link to="/articles-list" style={{color:"#ffffff",textDecoration:"none"}}>Articles</Link></Nav.Link>
      
    </Nav>
    <Form inline>
      <Link to="./article/learn-react"><Button variant="info" className="mr-1" >Login</Button></Link>
      <Link to="/about"><Button variant="info"  >SignUp</Button></Link>
    </Form>
  </Navbar>
  
</>
);

export default NavBar;