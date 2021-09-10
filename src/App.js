import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  function down(){
    setCount(prevCount => prevCount - 1)
  }

  function up(){
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <button onClick={up}>+</button>
      <span>{count}</span>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
