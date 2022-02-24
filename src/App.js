import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let counter = (state) => state + 1;
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(counter)}>+1</button>
    </>
  );
}

export default App;



