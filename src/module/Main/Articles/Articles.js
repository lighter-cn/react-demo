import React from "react";
import Article from "./Article"
import ArticleIndex from "./ArticleIndex"
import article_json from "./article.json"


const Articles = props => {
  const aj = article_json;

  return (
    <section className="articles">
      <h2 className="articles__title">articles</h2>
      <p className="articles__txt">記事の置き場です。</p>
      <ul className="articles__index">
        {aj.map(x=>{return (
          <ArticleIndex 
            title={x.title} 
            subTitle={x.subTitle} 
            tags={x.tags} 
            date={x.date} 
            key={x.title}
           />
        )})}
      </ul>
    </section>
  );
}

export default Articles;