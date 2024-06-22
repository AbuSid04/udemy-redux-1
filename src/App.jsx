import Counter from "./components/Counter"
import Header from "./components/Header"
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile"
import React from "react"

import { useSelector } from "react-redux"

const App = () => {
  const isAuthinticated = useSelector(state => state.auth.isAuthinticated)
  return (
    <>
      <Header />
      {
        isAuthinticated ? <UserProfile /> : <Auth /> 
      }
      <Counter />
    </>
  )
}

export default App