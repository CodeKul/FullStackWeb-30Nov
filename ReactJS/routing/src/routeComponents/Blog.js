import React from "react";
import { useParams } from "react-router-dom";
function Blog() {
  // useParams -return object

  const { blogid } = useParams();

  return (
    <div>
      <h2>Blog {blogid}</h2>
      
    </div>
  );
}

export default Blog;
