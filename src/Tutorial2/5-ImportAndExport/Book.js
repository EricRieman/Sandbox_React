import React from "react"

const Book = (props) => {
    return (
        <div className = "book" onMouseOver={() => { console.log(props.title) }}> 
            <Image img = {props.img}/>
            <Title title = {props.title} />
            <Author author = {props.author} />
            <Button text = "Buy"/>
        </div>
    )
}

const Image = ({img}) => {
    return (
        <img src={img} alt=" " />
    )
}

const Title = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Author = ({author}) => {
    const stlye = {
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.25rem"
    }
    return (
        <h4 style={stlye}>{author}</h4>
    )
}

const handleClick = (text) => {
    console.log(text )
}

const Button = (props) => {
    return (
        <button type="button" onClick={ () => handleClick(props.text)}>
            {props.text}
        </button>
    )
}

export default Book