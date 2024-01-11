import React from "react"

const About=()=>{

    const bodystyle={
        backgroundColor:"pink",
       }
    const styling={
        textAlign:"center",
        color:"purple"
    }
    const styling2={
        textAlign:"center",
        color:"blue"
    }
    const styling3={
        color:"purple"
    }
    return(
        <div style={bodystyle}>
        <h3 style={styling}>It can be played by any number of players.</h3>
        <h3 style={styling}>The objective of the game is to correctly predict whether the coin will land on "heads" or "tails" after being tossed.</h3>
        <h1 style={styling2}>Gameplay:</h1>
        <h3 style={styling3}>
        <ol>
        <li>The game begins with a designated person, often referred to as the tosser, flipping the coin into the air.</li>
        <li>Before the coin lands, players must make their predictions by calling out "heads" or "tails."</li>
        <li>Once the coin lands, the side facing up determines the winner. If a player correctly guessed the side facing up, they win; otherwise, they lose.</li>
        </ol>
        </h3>

        </div>
    )
}
export default About