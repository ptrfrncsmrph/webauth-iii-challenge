import React, { useState, createContext } from "react"
import { Route, NavLink } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Users from "./components/Users"

const { Provider: TokenProvider } = createContext(null)

const App = () => {
  const [token, setToken] = useState(null)
  const logOut = () => {
    console.log("Logout clicked")
  }

  return (
    <TokenProvider value={{ token, setToken }}>
      <main>
        <nav>
          <NavLink to="/">Home</NavLink>
          {" | "}
          {token ? (
            <NavLink to="/" onClick={logOut}>
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/login">Log In</NavLink>
          )}
          {" | "}
          <NavLink to="/signup">Sign Up</NavLink>
          {" | "}
          <NavLink to="/users">Users</NavLink>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={Users} />
      </main>
    </TokenProvider>
  )
}

export default App
