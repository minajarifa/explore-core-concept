import { useState } from "react";

export default function Counter() {
  const [runs, setRuns] = useState(0);
  const [sixes, setsixes] = useState(0);
  const [fours, setFours] = useState(0);
  const handleAdd = () => {
    const newRuns = runs + 1;
    console.log(runs);
    setRuns(newRuns);
  };
  const handleSix = () => {
    const updateRun = runs + 6;
    setRuns(updateRun);
    const updateSixs = sixes + 1;
    setsixes(updateSixs);
  };

  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
    const updateRour = fours + 1;
    setFours(updateRour);
  };

  const counterStyle = {
    border: "2px solid yellow",
    margin: "30px",
  };
  return (
    <div>
      <p>six: {sixes}</p>
      <p>four: {fours}</p>
      <div style={counterStyle}>
        <p>Runs: {runs}</p>
        <button onClick={handleAdd}>singles</button>
        <button onClick={handleSix}>six</button>
        <button onClick={handleFour}>Four</button>
      </div>
    </div>
  );
}
