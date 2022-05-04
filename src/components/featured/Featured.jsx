import { InfoOutlined, PlayArrow, Add} from "@material-ui/icons";
import "./featured.scss";
import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios';

export default function Featured({ type }) {

  const [movie, setMovie] = useState()
  useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[6])
      setMovie(response.data.results[6])
    })
  }, [])


  return (
   
       <div style= {{backgroundImage: `url(${movie ?imageUrl+movie.backdrop_path : ""})`}} 
       className='banner'>
       <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <h1 className='description'> {movie? movie.overview: ""}</h1> 
     
            <br></br>
            <div className='banner_buttons'>
            <button className="button">
            <PlayArrow /><span>Watch Now</span>
            </button>
            <button className="button">
            <Add/><span>Wish List</span>
            </button>
            <button className="button">
            <InfoOutlined />
            <span>Details</span>
          </button>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}
