import React, { useState,useEffect } from "react";

const Tool1 = props => {
  const [articles,setArticles] = useState(null);

  const getJson = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const obj = {title: title,content: content};
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch("https://jsonbox.io/box_aa8304412bb017eaa234", {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
  }

  useEffect(()=>{
    fetch("https://jsonbox.io/box_aa8304412bb017eaa234")
    .then(res => res.json())
    .then(res => {
      for(const i in res){
        console.log(res[i]);
      }
    })
  });

  return (
    <section className="tool">
      <h2 className="tool__title">Tool1</h2>
      <p className="tool__txt">jsonの投稿と取得</p>
      <p>{ articles }</p>

      <form>
        <label>
          Title:
          <input type="text" name="title" id="title"/>
        </label>
        <label>
          Content:
          <textarea id="content"></textarea>
        </label>
        <input type="submit" value="push" onClick={(e)=>{getJson(e)}}></input>
      </form>
    </section>
  );
}

export default Tool1;