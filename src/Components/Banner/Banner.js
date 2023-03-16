import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../Constants/Constants'
import { imageUrl } from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState('')
  useEffect(()=>{
    axios.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then((response)=>{
      
      setMovie(response.data.results[0])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className="content">
            <h1 className="title">
              {movie?movie.title : ""}
            </h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className="description">{movie?movie.overview :""}</h1>
        </div>
        <div className="fade_bottom"></div>


    </div>
  )
}

export default Banner