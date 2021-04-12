import React from "react";
import { useParams } from "react-router";
import nature from "../img/nature.jpg";

function BlogComponent() {
  const { blogname } = useParams();
  console.log(blogname);
  return (
    <div>
      <h2>{blogname}</h2>
      <img src={nature} alt="" />
    </div>
  );
}

export default BlogComponent;
