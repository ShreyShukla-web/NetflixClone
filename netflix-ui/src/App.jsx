import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Netflix from './Pages/Netflix'
import Movies from './Pages/Movies'
import TvShows from './Pages/TvShows'
import Player from './components/Player';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="player" element={<Player/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      {/* <Route exact path="/" element={<Netflix />}/> */}
      <Route exact path="/Netflix" element={<Netflix />} />
      <Route exact path="/tv" element={<TvShows/>}/>

    </Routes>
    </BrowserRouter>
  )
}
