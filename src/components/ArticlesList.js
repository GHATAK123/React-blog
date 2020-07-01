import React from 'react';
import {Link} from 'react-router-dom';
import articleContent from '../pages/article-content';

const ArticlesList = () => (
  <>
  
  {articleContent.map((article,key) => (
    <Link style={{color:"#000000",textDecoration:"none"}} key={key} to={`/article/${article.name}`}> <h3 style={{textAlign:"left"}}>{article.title}</h3>
     <p style={{textAlign:"left"}} >{article.content[0].substring(0,150)}...</p>
     <hr></hr>
     </Link>
   ))}
  
   </>
);

export default ArticlesList;