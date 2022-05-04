import React, {useEffect, useState} from 'react'
import './MoviePage.scss'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
import {PlayArrow,Add} from "@material-ui/icons";

function MoviePage(props) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState()
    
    useEffect(() => {
        axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
        setMovie(response.data.results)
      })
    }, [])

  return (
    <div className='listpage'>
      <h2>{props.title}</h2>
      
      <div className="lists">
      {movies.map((obj)=>
        <div className='list'>
               <img 
               className= 'list'  
               src= {`${imageUrl+obj.backdrop_path}`}></img> 
               

          <div className='write'>
              
            <div className= 'descc'>
            <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon"  />
            </div>
            <h1 className='head'>{obj.title}</h1>
            <div className='Info'>
            <span className="fa fa-star checked"></span>
            <span className='rating'>{obj.vote_average}</span>
            </div>
          
            </div>

          </div>
        </div>
               
        )}
               
      </div>
    </div>
  );
}

export default MoviePage