import React, { useState,useEffect } from "react";

const Tool1 = props => {
  const [articles,setArticles] = useState({title: "foo",text: "bar"});

  const getJson = (e) => {
    e.preventDefault();
    console.log("push");
    fetch("https://jsonbox.io/box_aa8304412bb017eaa234")
    .then(res => {
      console.log(res);
    });
  }

  // useEffect(()=>{
  //   fetch("https://jsonbox.io/box_aa8304412bb017eaa234").then(res => console.log(res.json()))
  // });

  return (
    <section className="tool">
      <h2 className="tool__title">Tool1</h2>
      <p className="tool__txt">jsonの投稿と取得</p>
      <table>
        <th>title</th>
        <th>text</th>
        <td>{articles.title}</td>
        <td>{articles.text}</td>
      </table>
      <form>
        <input type="submit" value="push" onClick={(e)=>{getJson(e)}}></input>
      </form>
    </section>
  );
}

export default Tool1;