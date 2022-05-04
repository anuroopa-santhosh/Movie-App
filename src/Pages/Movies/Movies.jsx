import React from 'react';
import {ActionMovies,HorrorMovies,RomanceMovies,ComedyMovies,originals,action,trending} from '../../urls'
import MoviePage from '../../Pages/Movies/MoviePage';
import './Movie.scss'

function Movies(){
    return(
    <div className="movie">
      <h2 className='head'>MOVIES</h2>
        <MoviePage url={ActionMovies} title='Action Movies'/>
        <MoviePage url={HorrorMovies} title='Horror Movies'/>
        <MoviePage url={RomanceMovies} title='Romance Movies'/>
        <MoviePage url={ComedyMovies} title='Comedy Movies'/>
        <MoviePage url={originals} title='Amazon Originals'/>
        <MoviePage url={action} title='Action Movies'/>
        <MoviePage url={trending} title='Trending'/>
      
    </div>
    );
    }

export default Movies;

        