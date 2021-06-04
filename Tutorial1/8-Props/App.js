import React from "react"
import {ContactCard, ContactCard2} from "./ContactCard"

function App()
{
    return(
        <div>
            <ContactCard 
                myName = "Google"
                myLink = "http://google.com/" 
                myHeader ="Hello"
                myP = "testing"/>
            <ContactCard2 
                contact = {{myName: "Google", myLink: "http://google.com/", myHeader:"Hello", myP: "testing"}}
            />    
        </div>
    )
}

export default App;