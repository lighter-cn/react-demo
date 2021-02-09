import React from "react";

const ArticleIndex = props => {
  return (
    <li className="articles__index-item">
      <h3 className="articles__index-title">{props.title}</h3>
      <p className="articles__index-txt">{props.subTitle}</p>
      <p className="articles__index-data">{props.date}</p>
    </li>
  );
}

export default ArticleIndex;