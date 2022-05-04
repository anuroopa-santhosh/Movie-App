import React, {useEffect, useState} from 'react'
import './listItem.scss'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {PlayArrow,Add} from "@material-ui/icons";

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState()
    const [urlId,setUrlId]=useState('')
    

    useEffect(() => {
        axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
        setMovie(response.data.results)
      })
    }, [])

    const opts ={
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    const handleMovie =(id)=>{
      console.log(id)
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
        }else{
          console.log('Array empty')
        }
      })
    } 
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      
      <div className="posters">
      {movies.map((obj)=>
        <div className='Movie'>
               <img 
               onClick={()=>handleMovie(obj.id)} 
               className= {props.isSmall ? 'smallPoster': 'poster'} alt='poster' 
               src= {`${imageUrl+obj.backdrop_path}`}></img> 
               
               
          <div className='text'>
              
            <div className={props.isSmall ? 'nostyle' :'style'}>
            <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon" />
            </div>
            <h1 className='head'>{obj.title}</h1>
            <div className='itemInfoTop'>
            <span className="fa fa-star checked"></span>
            <span className='rating'>{obj.vote_average}</span>
            </div>
            <br/>
            {obj.overview}
            </div>

          </div>
        </div>
               
        )}
               
      </div>
       
        { urlId && <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  );
}

export default RowPost