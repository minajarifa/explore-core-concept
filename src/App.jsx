import "./App.css";

function App() {
  function handleClink() {
    alert("I am Clicked");
  }
  const handleClickMe3 = () => {
    alert(" I Am Click Me 3");
  };
  const handleAdd = (num) => {
    const newNum = num + 1;
    alert(newNum);
  };
  return (
    <>
      <div>
        <h3>Vite + React</h3>
        <button onClick={handleClink}>Click me</button>
        <button
          onClick={function handleClink2() {
            alert("I am clicked 2");
          }}
        >
          Click me 2
        </button>
        <button onClick={handleClickMe3}>clik me 3</button>
        <button onClick={() => alert("I am click")}>clik me 4</button>
        <button onClick={() => handleAdd(1)}>Click me 5</button>
      </div>
    </>
  );
}

export default App;
