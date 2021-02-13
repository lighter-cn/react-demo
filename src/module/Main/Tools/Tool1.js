import React, { useState,useEffect } from "react";

const Tool1 = props => {
  // const [key,setKey] = useState(process.env.REACT_APP_QIITA_KEY);
  const [title,setTitle] = useState("");
  const [tags,setTags] = useState("");

  let qiitaArticle = (
    <div>
      <p>{title}</p>
      <p>{tags}</p>
    </div>
    );

  useEffect(()=>{
    fetch("https://qiita.com/api/v2/items").then(res=>{
      return res.json()
    }).then(res=>{
      setTitle(res[0].title);
      setTags(res[0].tags[0].name);
    })
  })
  return (
    <section className="tool">
      <h2 className="tool__title">Tool1</h2>
      <p className="tool__txt">Qiita APIから最新の記事を取得する</p>
      {qiitaArticle}
    </section>
  );
}

export default Tool1;