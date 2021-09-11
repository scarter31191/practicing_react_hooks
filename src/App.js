import React, {useState} from "react";
import Joke from "./joke_api";

function App() {
  const [count, setCount] = useState(0)
  const [saying, setSaying] = useState('click')

  function down(){
    setCount(prevCount => prevCount - 1)
    setSaying(prevSaying => prevSaying = "lawd")
  }

  function up(){
    setCount(prevCount => prevCount + 1)
    setSaying(prevSaying => prevSaying = "we UP!")
  }

  return (
    <div className="App">
      <button onClick={up}>+</button>
      <span>{count} {saying}</span>
      <button onClick={down}>-</button>
      <Joke />
    </div>
  );
}

export default App;
