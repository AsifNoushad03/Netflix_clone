import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {

  const [movies, SetMovies] = useState([])
  const [urlid, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      SetMovies(response.data.results);
    }).catch(err => {
      // alert("err")
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
      else {
        console.log('trailer not available');
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
     
      <div className='posters'>
  
        {movies.map((obj) =>
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='poster'></img>
          
        )}



      </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost
