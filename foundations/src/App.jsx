import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <div style={{display:"flex", justifyContent:"center", gap:'20px'}}>
        <button onClick={() => setCount(count + 1)}>📈</button>

        <button onClick={() => setCount(count - 1)}>📉</button>

        <button onClick={() => setCount(count + 5)}>📈 By 5</button>

        <button onClick={() => setCount(count - 10)}>📉 By 10</button>

        <button onClick={() => setCount(0)}>♻️ Reset Counter</button>
      </div>
    </div>
  );
}

export default App;
