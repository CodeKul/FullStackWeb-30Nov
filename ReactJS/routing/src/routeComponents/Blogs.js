import React from "react";
import { Link, Route } from "react-router-dom";
import Blog from "./Blog";
function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to="/blogs/20">Blog 1 - CSS Animations</Link>
        </li>
        <li>
          <Link to="/blogs/21">Blog 2 - CSS Flexbox</Link>
        </li>
      </ul>
      <Route path="/blogs/:blogid" component={Blog} />
    </div>
  );
}

export default Blogs;
