import React, { useEffect } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import Blog from "./Blog";
function Article() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to={`${url}/20`}>Blog 1 - CSS Animations</Link>
        </li>
        <li>
          <Link to={`${url}/21`}>Blog 2 - CSS Flexbox</Link>
        </li>
      </ul>

      <Route path={`${path}/:blogid`} component={Blog} />
    </div>
  );
}

export default Article;
