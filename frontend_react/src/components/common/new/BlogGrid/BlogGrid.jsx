import React, { Component } from "react";
import "./BlogGrid.css";
import BlogPostModule from "../BlogPostModule/BlogPostModule";

export default function BlogGrid(props) {

  // console.log(props.data);
  
  return (
    <div className="blog-grid">
      {props.data.map((item, index) =>
        <BlogPostModule data={item} key={index} type={index === 0 ? "a" : "b"}/> 
      )}
    </div>
  );
}
