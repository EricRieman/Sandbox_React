// 3) initialize state to save the following data: top text, bottom text, random image from http://i.imgflip.com/1bij.jpg
// 4) make an api call to http://api.imgflip.com/get_memes and save the data that comes back,
//    (response.data.memes) to a new state property called 'allMemeImgs' (which is an array)
import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch( "https://api.imgflip.com/get_memes" )
            .then( response => response.json())
            .then( response => {
                const memes = response.data
                console.log(memes)
                this.setState({allMemeImgs: memes})
            })
    }


    render() {
        return (
            <div>
                <form className= "meme-form">
                    <button>Generate</button>

                </form>
            </div>
        )
    }
}

export default MemeGenerator;