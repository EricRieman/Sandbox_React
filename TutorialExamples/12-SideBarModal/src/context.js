import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

// becasue we are wrapping the entire app in the AppProvider, we need to pass in
// the children (ie, the app) and return it so it can be rendered (see index.js)
const AppProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <AppContext.Provider value={{
      showModal,
      setShowModal, 
      showSideBar, 
      setShowSideBar 
    }}>
      {children}
    </AppContext.Provider>
  )
}

// created a custom hook to avoid importing both AppContext and useContext ion every
// file that uses this. Now, we can just import useGlobalContext

const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
