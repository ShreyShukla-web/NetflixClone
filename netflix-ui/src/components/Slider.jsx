import React from 'react'
import CardSlider from './CardSlider'

export default function Slider({movies}) {
    const getMoviesFromRange = (from,to) =>{
        return movies.slice(from,to)
    }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)}/>
      <CardSlider title="Recommended" data={getMoviesFromRange(10,20)}/>
      <CardSlider title="Top 10 on Netflix" data={getMoviesFromRange(20,30)}/>
      <CardSlider title="Netflix Originals" data={getMoviesFromRange(30,40)}/>
      <CardSlider title="Since you watched" data={getMoviesFromRange(40,50)}/>
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(50,60)}/>
    </div>
  )
}
