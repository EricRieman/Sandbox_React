// 3) initialize state to save the following data: top text, bottom text, random image from http://i.imgflip.com/1bij.jpg

import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    render() {
        return (
            <div>
                Testing
            </div>
        )
    }
}

export default MemeGenerator;