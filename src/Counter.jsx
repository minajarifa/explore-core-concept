import { Suspense, useState } from "react";

export default function Counter() {
  const [runs, setRuns] = useState(0);
  const [sixes, setsixes] = useState(0);
  const [fours, setFours] = useState(0);
  const handleAdd = () => {
    const newRuns = runs + 1;
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
  function handleClink() {
    alert("I am Clicked");
  }
  const handleClickMe3 = () => {
    alert(" I Am Click Me 3");
  };

  // fetch(`https://jsonplaceholder.typicode.com/posts`)
  // .then(res=>res.json())
  // .then(data=>console.log(data))
  // const loadData=async()=>{
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   const data = res.json()
  //   console.log(data)

  // }
  // const fetchUser = fetch(`https://jsonplaceholder.typicode.com/posts`).then(
  //   (res) => res.json(),
  // );
  // const user= use(fetchUser)
  // console.log(user)
  return (
    <div className="text-center">
      {/* <div className="my-20">
        <Suspense fallback={<h3>loding...</h3>}>
          <div>
            
          </div>
        </Suspense>
      </div> */}
      <p>six: {sixes}</p>
      <p>four: {fours}</p>
      <div style={counterStyle}>
        <p>Runs: {runs}</p>
        <button
          className="p-4 btn btn-outline btn-primary "
          onClick={handleAdd}
        >
          singles
        </button>
        <button
          className="p-4 btn btn-outline btn-primary "
          onClick={handleSix}
        >
          six
        </button>
        <button
          className="p-4 btn btn-outline btn-primary "
          onClick={handleFour}
        >
          Four
        </button>
      </div>
      <div>
        <h3>Vite + React</h3>

        <button
          className="m-5 btn btn-outline btn-primary"
          onClick={handleClink}
        >
          Click me
        </button>
        <button
          className="m-5 btn btn-outline btn-primary"
          onClick={function handleClink2() {
            alert("I am clicked 2");
          }}
        >
          Click me 2
        </button>
        <button
          className="m-5 btn btn-outline btn-primary"
          onClick={handleClickMe3}
        >
          clik me 3
        </button>
        <button
          className="m-5 btn btn-outline btn-primary"
          onClick={() => alert("I am click")}
        >
          clik me 4
        </button>
        <button
          className="m-5 btn btn-outline btn-primary"
          onClick={() => handleAdd(1)}
        >
          Click me 5
        </button>
      </div>
    </div>
  );
}
