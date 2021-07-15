// React router allows us to swap between pages all on client side. The most popular
// router library is react-router, but it is not part react, it is its own library
// istall using: nmp install react-router-dom

// We wrap the entire application in the Router component, so it can be used anywhere.
// this can be done in index.js, or, in this example, the return of App

// Router will display all pages that match the path, which in the case of the home page,
// is every page becasue they all begin with /. To avoid this, pass in the exact prop.
// this is usful when there are nested pages and you do/dont want partent pages displayed

// if a user tries to navigate to a page that doesnt exist, an empty page is displayed. We
// can create a default error page that gets rendered whenever this happens by using "*"
// as the path, meaning it will accecpt any path. But then the rror page's path will 
// always match, as so will be displayed with every other page. To eliminate that
// wrap all our routes in a Switch component, which ensures on the first match gets 
// dispayed. This means if none of the other routes match, only then the error is displayed.

//9:30

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import People from './pages/People'
import Error from './pages/Error'
import Person from './pages/Person'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About /> 
        </Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path='/person/:id' children={<Person/>}></Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App