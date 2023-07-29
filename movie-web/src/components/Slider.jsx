import React from 'react'
import { CardSlider } from './CardSlider'

export const Slider = ({movies}) => {
  const getMoviesFormRange=(from, to)=>{
    return movies.slice(from, to);
  }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFormRange(0,10)}/>
      <CardSlider title="New Releases" data={getMoviesFormRange(10,20)}/>
      <CardSlider title="Blockbuster Movies" data={getMoviesFormRange(20,30)}/>
      <CardSlider title="Popular On Netflix" data={getMoviesFormRange(30,40)}/>
      <CardSlider title="Action Movies" data={getMoviesFormRange(40,50)}/>
      <CardSlider title="Epics" data={getMoviesFormRange(50,60)}/>
    </div>
  )
}
