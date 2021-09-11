import React, {useState} from "react";
import Joke from "./joke_api";
import Text from "./text"

function App() {
  const [showCount, setShowCount] = useState(false)
  const [showButton, setShowButton] = useState('show counter')

  const show = () => {
    setShowCount(!showCount)
    setShowButton(!showButton)
  }

  return (
    <div className="App">
      {showCount ? <Text /> : null}
      <button onClick={show}>{showButton ? 'show counter' : 'hide' }</button>
      <Joke />
    </div>
  );
}



export default App;
