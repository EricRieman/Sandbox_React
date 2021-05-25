// Its always best to break code up into smaller chunks. lets clean
// up the code from the last lesson by creating a 'smart' componenet to 
// hold the logic/sate and a 'presentational' componnent that handles the 
// rendering (there are several differnt names that all refer to the same thing)

import React from "react"
import FormContainer from "./FormContainer"

function App() {
    return(
        <FormContainer />
    )
}

export default App;