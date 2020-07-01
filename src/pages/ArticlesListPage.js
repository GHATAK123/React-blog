import React from 'react';
import ArticlesList from '../components/ArticlesList';
import {Card} from 'react-bootstrap';
const ArticlesListPage = () => (
  <>
  <br></br>
  <Card>
  <Card.Header><h1>Articles</h1></Card.Header>
  <Card.Body>
    <Card.Text>
        <ArticlesList />
    
    </Card.Text>
    
  </Card.Body>
</Card>
  
  
 
  </>

);

export default ArticlesListPage;