import React from 'react';
import articleContent from './article-content';
import {Card} from 'react-bootstrap';

const ArticlePage = ({match}) => {
  const name=match.params.name;
  const article=articleContent.find(article => article.name === name)
  if(!article) return <h1>Article does not exist</h1>
   return (
  <>

  <br></br>
  <Card>
  <Card.Header>{article.title}</Card.Header>
  <Card.Body>
    <Card.Text>
    {article.content.map((paragraph,key)=>(
    <p key={key}>{paragraph}</p>
  ))}
    </Card.Text>
    
  </Card.Body>
</Card>
  <div className="container">
  
  
  </div>
  
  </>

)
   };

export default ArticlePage;