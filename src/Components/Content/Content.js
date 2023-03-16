import React,{useEffect,useState} from 'react'
import './Content.css'
import axios from '../../axios'
import {imageUrl,API_KEY, baseURL } from '../../Constants/Constants'
import YouTube from 'react-youtube';
// import ReactPlayer from 'react-player'



function Content(props) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            // console.log(response.data.results)
            const results = response.data.results
            setMovie(results);

        }).catch(err=>{
            alert('Network error')
        })
    })
    const opts = {
      height: '360',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },};
      const handleMovie = (id)=>{
        console.log(id)
        axios.get(baseURL+`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if(response.data.results.length!==0){
            console.log(response.data.results)
            setUrlId(response.data.results[0])
          }else{
            alert('No Data avaialable')
          }
        })

      }
      const handleReset = () => {
        setUrlId(null);
      };
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
    {movie.map((results)=>(
    <div key={results.id} className={props.isSmall?'smallPoster':'poster'}>
    <img onClick={()=>handleMovie(results.id)} className={props.isSmall?'smallPoster':'poster'} alt={results.original_title} src={`${imageUrl + results.backdrop_path}`}/>
    <p className='Movietitle'>{results.original_title}</p>
    </div>
    
    ))}
    {urlId &&<div onClick={handleReset}> <YouTube  opts={opts} videoId={urlId.key}/></div> }

   {/* {urlId && <ReactPlayer url={`https://www.youtube.com/watch?v=${urlId.key}`} />} */}
    </div>
    </div>
  )
}


export default Content

