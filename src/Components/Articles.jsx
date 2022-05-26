import React from 'react'
import {useState} from 'react'
import {collection } from "firebase/firestore"
import {db} from "../firebaseConfig.js"
function Article() {
    const [articles,addArticle]=useState([{title:"helloWorld"}]);
    const articleRef=collection(db,"articles")
  return (
    <div className="Article">
      {articles.length==0?<p>no article found </p> :articles.map((article)=>{ return <div>{article.title}</div>})}
    </div>
  );
}

export default Article;
