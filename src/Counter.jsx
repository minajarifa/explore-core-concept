import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [sixes, setsixes] = useState(0);
  const handleAdd=()=>{
    const newCount= count+1
    setCount(newCount)
  }
  const handleSix=()=>{
    const updateRun= count+6
    const updateSixs= sixes+1
    setsixes(updateSixs)
    set(updateSixs)
  }
  
  const counterStyle = {
    border: "2px solid yellow",
    margin: "30px",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>singles</button>
      <button >Four</button>
      <button >six</button>
    </div>
  );
}
