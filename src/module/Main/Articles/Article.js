import React from "react";

const Article = props => {
  return (
    <article className="article">
      <h3 className="article__title">{props.title}</h3>
      <p className="article__index-tags">
        {props.tags.map(x=>{return (<span className="article__index-tag">#{x}</span>)})}
      </p>
      <p className="article__txt">{props.text}</p>
      <p className="article__date">{props.date}</p>
      <button onClick={()=>{props.setArticleId("")}}>back</button>
    </article>
  );
}

export default Article;