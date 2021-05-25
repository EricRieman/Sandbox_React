// 2) create 2 components - Header and MemeGenerator
// header will only display
// meme generator will call an api and hold onto data

import MemeGenerator from "./MemeGenerator"
import Header from "./Header"

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App;