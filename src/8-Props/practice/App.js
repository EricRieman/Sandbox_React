// render joke components.
// each joke should recive a question and a punchline
// render them however

import {Joke, Joke2} from "./Joke"

function App() {
    return(
        <div>
            <Joke2 data = {{question: "whats up", punchLine: "Hello"}} />
            <Joke
                question = "whats up2"
                punchLine = "Hello" />
            <Joke
                punchLine = "Hello" />
            <Joke2 data = {{punchLine: "Hello"}} />
        </div>
    )
}

export default App;