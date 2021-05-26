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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    // 6) create the onChange handler here
    handleChange(event) {
        const {name, value} = event.target
        this.setState( {[name]: value} )
    }
 
    // 7) attach a function to the generate button that
    // chooses and sows a random meme from allMemeImgs
    handleSubmit(event) {
        event.preventDefault() // stops page from refreshing
        const rand = 10 //Math.floor(Math.random() * this.state.allMemeImgs.length)
        const img = this.state.allMemeImgs[rand].url
        this.setState( {randomImg: img} )
    }

    render() {
        return (
            <div>
                <form className= "meme-form" onSubmit={this.handleSubmit}>
                    {/*5) Create 2 input fields, one for top and bottom text*/}
                    <input 
                        type="text"
                        name="topText" 
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="bottomText" 
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>
                <div className = "meme">
                    <img src={this.state.randomImg} alt=''/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;