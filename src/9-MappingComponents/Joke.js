import "./style.css"

export function Joke( props ) {
    return (
        <div className ="joke">     
            <h1 style = {{display: props.question ? "block" : "none"}}>Question: {props.question} </h1>
            
            <h1>Punch Line: {props.punchLine}</h1>
        </div>
    )
}

export function Joke2 (props) {
    return (
        <div className ="joke2" >
            <p>Question: {props.data.question}
            <br/>
            Punch Line: {props.data.punchLine}</p>
        </div>
    )
}