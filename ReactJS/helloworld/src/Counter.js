import React, { useState, useEffect } from "react";

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
  const [city, SetCity] = useState("");
  useEffect(() => {
    console.log("useeffect");
  }, [city]);

  const updateCounter = () => {
    setCounter((prevstate) => prevstate + 1);
  };

  const reduceCounter = () => {
    setCounter((prevstate) => prevstate - 1);
  };

  const changeCity = () => {
    SetCity((prevstate) => prevstate + "Pune");
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
        <p>{city}</p>
        <button onClick={changeCity}>CityUpdate</button>
      </div>
    </div>
  );
}

export default Counter;
