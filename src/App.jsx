import "./app.scss"
import Home from '../src/Pages/Home/Home'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TvShows from "./Pages/TvShows/TvShows";
import Movies from "./Pages/Movies/Movies";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

      <Router>
      <div>
        <Navbar/> </div>

        <div className='topMargin'>
        <Routes>
          <Route exact path="/" element={<Home/>}> </Route> 
          <Route path="/tvshows" element= {<TvShows/>}></Route>
          <Route path="/movies" element= {<Movies/>}></Route>
        </Routes>
        </div>
        <br/>
        <br/>
        <br/>
       <div> 
        <Footer year='2022'/>
      </div>
      </Router>
        );
      };

export default App;