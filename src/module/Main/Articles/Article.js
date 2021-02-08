import React from "react";

const Article = props => {
  return (
    <article className="article">
      <h3 className="article__title">article title</h3>
      <ul className="article__tags">
        <li className="article__tag">JavaScript</li>
      </ul>
      <p className="article__txt">this is sample. this is sample.</p>
    </article>
  );
}

export default Article;