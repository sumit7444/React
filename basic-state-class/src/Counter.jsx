import { useState } from "react";
function init(){
    console.log("innit was executed");
    return Math.random();
}
export default function Counter() {
  let [count, setCount] = useState(init); // initialization
  console.log("Counter rendered");

  let incCount = () => {
    // increment twice
    setCount((currCount)=>{;
    return currCount + 1;
    });
};

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase count</button>
    </div>
  );
}