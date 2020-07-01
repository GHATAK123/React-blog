import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
  <h1>404:Page Not Found</h1>
  <Link to="/"><Button variant="danger">HomePage</Button></Link>
  
  </>
);

export default NotFoundPage;