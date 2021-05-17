import "./style.css"


export function Joke( props ) {
    return (
        <div className ="joke">     
            <p>{props.question}<br/>
            {props.punchLine}</p>
        </div>
    )
}

export function Joke2 (props) {
    return (
        <div className ="joke2" >
            <p>{props.data.question}<br/>
            {props.data.punchLine}</p>
        </div>
    )
}