import React,{ useState,useEffect } from "react";
import Article from "./Article"
import ArticleIndex from "./ArticleIndex"
import article_json from "./article.json"

const Articles = props => {
  const aj = article_json;
  const [articleId,setArticleId] = useState("");
  const [articlesInner,setArticlesInner] = useState();

  useEffect(()=>{
    if(articleId===""){
      setArticlesInner(
        <>
          <h2 className="articles__title">articles</h2>
          <p className="articles__txt">記事の置き場です。</p>
          <ul className="articles__index">
            {aj.map(x=>{return (
              <ArticleIndex 
                title={x.title} 
                subTitle={x.subTitle} 
                tags={x.tags} 
                date={x.date} 
                id={x.id}
                key={props.id}
                setArticleId={setArticleId}
              />
            )})}
          </ul>
        </>
      );
    }else{
      setArticlesInner(
        <Article 
          title={aj[articleId].title} 
          subTitle={aj[articleId].subTitle} 
          text={aj[articleId].text} 
          tags={aj[articleId].tags} 
          date={aj[articleId].date} 
          setArticleId={setArticleId}
        />
      )
    }
  },[articleId])

  return (
    <section className="articles">
      {articlesInner}
    </section>
  );
}

export default Articles;