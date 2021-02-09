import React from "react";

const ArticleIndex = props => {
  return (
    <li className="articles__index-item" key={props.id + "li"}>
      <h3 className="articles__index-title" key={props.id + "title"}>{props.title}</h3>
      <p className="articles__index-tags" key={props.id + "tags"}>
        {props.tags.map(x=>{return (<span className="articles__index-tag" key={props.id + x}>#{x}</span>)})}
      </p>
      <p className="articles__index-txt"  key={props.id + "txt"}>{props.subTitle}</p>
      <p className="articles__index-data" key={props.id + "date"}>{props.date}</p>
      <button onClick={()=>props.setArticleId(props.id)} key={props.id + "btn"}>detail</button>
    </li>
  );
}

export default ArticleIndex;