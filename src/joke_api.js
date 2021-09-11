// import React from 'react'
import React, {useState} from 'react';

function Joke_api() {
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        fetch("http://localhost:3005/jokes/random")
        .then((resp) => resp.json())
        .then((data) => {
            setJoke(data.setup + "..." + data.punchline);
        })
    };

    return (
        <div>
            Want to hear a joke? <button onClick={getJoke}>yea</button>...{joke}
        </div>
    )
}

export default Joke_api
