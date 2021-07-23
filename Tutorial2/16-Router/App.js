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

// URL params and placeholders can be used to route to the same page, but display differnt
// data. For example, each user could have their own page, but we dont want to make a page
// for each user, instead we make a 'template' page, and pass in the desired params
// through the url (see Person component as example). A decent tip is to pass in just
// an id thourgh the url param, then use that to fetch specific user data on that page.
// However, in this exaple, data is local, so no need to fetch. In order to access the url
// param in the placeholder component, we need to the useParams hook.

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

        {/*the /:id is known as a url parameter, the Person componenet is the placeholder.
        Inside Person, we use the id to generate the page*/}
        <Route path='/person/:id' children={<Person/>}></Route> 

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App