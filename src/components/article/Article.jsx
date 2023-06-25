import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text,url }) => (
  <div className="gp__blog-container_article">
    <div className="gp__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gp__blog-container_article-content">
      <div>
        <p>{date}</p>
        <br />
        <br />
        <br />
        <h3>{text}</h3>
      </div>
      <a href={url}><p>Read Full Article &#8594;</p></a>
    </div>
  </div>
);

export default Article;
