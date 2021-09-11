import React, {useState} from "react"

function Text() {
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
        <div>
            <button onClick={up}>+</button>
        <span>{count} {saying}</span>
      <button onClick={down}>-</button>
        </div>
    )
}

export default Text
