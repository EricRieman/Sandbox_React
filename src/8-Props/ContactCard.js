import React from "react"

export function ContactCard(props) {
    return (
        <div>
            <a href = {props.myLink} >{props.myName}</a>
            <h3>{props.myHeader} </h3>
            <p>{props.myP}</p>
        </div>
    )
}

export function ContactCard2(props) {
    return (
        <div>
            <a href = {props.contact.myLink} >{props.contact.myName}</a>
            <h3>{props.contact.myHeader} </h3>
            <p>{props.contact.myP}</p>
        </div>
    )
}