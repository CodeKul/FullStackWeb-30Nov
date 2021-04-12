import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import BlogComponent from "./BlogComponent";
import RoutingBlog from "./BlogComponent";
import HooksBlog from "./HooksBlog";
function Blog() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Blogs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        tempora quas, quasi illo cupiditate ab unde expedita ut necessitatibus
        porro consequuntur nobis at cumque sunt voluptates saepe dolore pariatur
        quis voluptate minus ratione ipsam adipisci. Est aliquid soluta nisi
        deleniti aut aliquam sint eos laboriosam quae reiciendis provident
        dolorem repellendus rerum saepe nemo quasi necessitatibus quas animi
        distinctio totam mollitia, ratione iusto recusandae? Ab, neque eveniet?
        Aliquam a vero optio distinctio autem, officiis, quis deserunt
        cupiditate molestiae reprehenderit laborum harum!
      </p>
      <Link to={`${url}/routing`}>Routing in React</Link>
      <br />
      <Link to={`${url}/hooks`}>Hooks in React</Link>
      <br />
      <Link to={`${url}/prop`}>State and Props</Link>
      <br />

      {/* <Switch>
        <Route path={`${path}/routing`} component={RoutingBlog} />
        <Route path={`${path}/hooks`} component={HooksBlog} />
      </Switch> */}

      <Switch>
        <Route path={`${path}/:blogname`} component={BlogComponent} />
      </Switch>
    </div>
  );
}

export default Blog;
