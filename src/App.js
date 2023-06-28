import  './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import React from 'react';
import Error from "./pages/error/Error"
import Navbar from "./components/navbar/Navbar"
import routes from "./conf/constants/routes"

function App() {
  return (

  <div>
    <Navbar />
    <Routes>
      <Route  path={routes.HOME_ROUTE} element={<Home/>} />
      <Route  path={routes.USERS_ROUTE} element={<Users />} />
      <Route  path='*' element={<Error />} />
    </Routes>
  </div>
  )
}

export default App;
