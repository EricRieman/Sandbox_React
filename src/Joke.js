import "./style.css"


export function Joke( props ) {
    return (
        <div className ="joke">     
            <p>Question:{props.question}</p>
            <br/>
            <p>Punch Line:{props.punchLine}</p>
        </div>
    )
}

export function Joke2 (props) {
    return (
        <div className ="joke2" >
            <p>Question:{props.data.question}</p>
            <br/>
            <p>Punch Line:{props.data.punchLine}</p>
        </div>
    )
}