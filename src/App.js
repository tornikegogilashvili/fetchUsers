import  './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./components/home/Home"
import Users from "./components/users/Users"
import React from 'react';
import Error from "./components/error/Error"


function App() {
  return (

  <div>
    <h1>
      hello world
    </h1>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path='/users' element={<Users />} />
      <Route  path='*' element={<Error />} />
    </Routes>
  </div>
  )
}

export default App;
