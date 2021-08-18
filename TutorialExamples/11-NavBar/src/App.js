import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
//import SideBar from './SideBar'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import ProfilePage from './pages/ProfilePage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <Router>
      <Navbar/>
      {/*<SideBar/> FOR TUTORIAL ONLY, to show that 
        components placed here show up on all pages*/}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <AboutPage /> 
        </Route>

        <Route path="/projects">
          <ProjectPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
