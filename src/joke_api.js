// import React from 'react'
import React, {useState} from 'react';

function Joke_api() { // when using useState make sure function decleration is capitalized
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        fetch("http://localhost:3005/jokes/random")
        .then((resp) => resp.json()) // this returns a penmding js obj if fufilled or rejected 
        .then((data) => { // if fufilled it returns a JS obj from the api 
            setJoke(`${data.setup}... ${data.punchline}`) // destructured the obj to access the keys then interpolated the data values to create a sentence
        }) 
    };

    return (
        <div>
            Want to hear a joke? <button onClick={getJoke}>yea</button>{joke}
        </div>
    )
}

export default Joke_api
