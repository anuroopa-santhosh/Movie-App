
import "./navbar.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = () => {
 
  return (
    <div className= "navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://i.pinimg.com/originals/b8/27/e4/b827e4819a7a95e2fa1ae0319c0cdeb3.jpg"
            alt=""
          />
         
        <span>
         <Link className="home"
         to="/">Home</Link>
         <Link className="tv"
          to="/tvshows">TV Shows</Link>
         <Link className="movies"
          to="/movies">Movies</Link>
        </span>

        </div>
        <div className="right">
        <Search/>
        </div>
      
          </div>
        </div>
    
    
  );
};

export default Navbar;
