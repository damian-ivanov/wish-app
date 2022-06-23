import hat from '../../../src/hat.png';
import styles from './ContactMe.module.css';
import { useEffect, useState } from "react";
import loader from '../../../src/loader.gif';

export default function ContactMe() {

const [joke, setJoke] = useState(null);
const [isReady, setIsReady] = useState(false);

useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?safe-mode')
    .then((response) => response.json())
    .then((data) => setJoke(data))
    .then(() => setIsReady(true))
    .catch((error) => console.error(error))
}, [isReady] );

const newJoke = function () {
    fetch('https://v2.jokeapi.dev/joke/any?safe-mode')
    .then((response) => response.json())
    .then((data) => setJoke(data))
}


    return (
        <>
            <div className={styles.contact}>
                <img src={hat} alt="hat" />
                <p>This site was created as a React JS project as part of my "SoftUni" education.</p>
                <p>You can reach me at damian.i.ivanov@gmail.com, and you can see my other projects at <a href="https://github.com/damian-ivanov" rel="noreferrer" target="_blank">Github</a></p>
            </div>
            
            {isReady ? 

            <article><p style={{color:"darkseagreen"}}> Here is a random joke:</p>

                {joke.joke ? <p>{joke.joke}</p> : ""}
                <p>{joke.setup}</p>
                <b>{joke.delivery}</b>
                <p><button onClick={newJoke}>see new joke</button></p>

            </article>

            : <img src={loader} alt='loading'></img>}
        </>
    )
}