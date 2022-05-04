import React from 'react';
import Featured from '../../components/featured/Featured';
import {continueWatching, latestMovies} from '../../urls'
import ListItem from '../../components/listItem/ListItem';
import './Home.scss'

function Home(){
    return(
    <div className="homeParentDiv">
        
        <Featured></Featured>
        <ListItem url={latestMovies} title='Continue Watching' />
        <ListItem url={continueWatching} title='Latest Movies' isSmall/>
      
    </div>
    );
    }

export default Home;

        