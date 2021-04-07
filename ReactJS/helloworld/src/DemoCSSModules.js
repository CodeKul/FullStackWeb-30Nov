import React from "react";
import classes from "./DemoCSSModules.module.css";
function DemoCSSModules() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, culpa
        mollitia enim sapiente ipsam veniam dignissimos laborum veritatis cum
        doloremque.
      </p>
      <button className={classes.button}>Css Modules</button>
    </div>
  );
}

export default DemoCSSModules;
