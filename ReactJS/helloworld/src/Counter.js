import React, { useState } from "react";

function Counter() {
  // const [hookName, setHookName] = useState("usestate ");
  // const [hookNametwo, setHookNameTwo] = useState("usecontext");
  // const changeName = () => {
  //   setHookName("useeffect");
  //   setHookNameTwo("useRef");
  // setHookName(
  //   (prevstate)=>prevstate + "usecontext "
  // );
  // setHookName(
  //   (prevstate)=>prevstate + "useeffect "
  // );
  //}
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter((prevstate) => prevstate + 1);
  };

  const reduceCounter = () => {
    setCounter((prevstate) => prevstate - 1);
  };
  return (
    <div>
      {/* <div>
     <p>
      {hookName} {hookNametwo}
      </p>
       <button onClick={changeName}>Change name</button>
   </div> */}

      <div>
        <p>{counter}</p>
        <button onClick={updateCounter}>Increment</button>
        <button onClick={reduceCounter}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
