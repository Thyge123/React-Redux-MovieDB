import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import MovieImg from './assets/Image/movie_black2.jpg';
import Home from './components/home';
import SearchMovie from './components/searchMovie';
import SearchedMoviesList from './components/searchedMovieList';
import UpcomingMoviesList from './components/upcomingMoviesList';
import TvShowList from './components/TvShowsList';
import Trailer from './components/trailer';
import FavoriteMovie from './components/favoriteMovies'
import SearchedGenreList from './components/searchedGenreList';
import SearchGenre from './components/searchGenre';
import SearchPerson from './components/searchPerson';
import SearchedPersonsList from './components/searchedPersonsList';
import MoviesByPerson from './components/moviesByPerson';

function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className="nav-item nav-link">Upcoming Movies</Link>
            <Link to='/tv-shows' className="nav-item nav-link">TV Shows</Link>
            <Link to='/favoriteMovies' className="nav-item nav-link">Favorite Movies</Link>
          </nav>
        </div>
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} alt='' width="75" height="75"/></span>
      <span className="d-flex justify-content-between p-0"></span>
      <div>
      <SearchMovie/> <SearchGenre/>
      <SearchPerson/>
      </div>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/upcoming' element={<UpcomingMoviesList/>} />
            <Route path='/searchedMovie' element={<SearchedMoviesList/>} /> 
            <Route path='/searchedGenre' element={<SearchedGenreList/>} /> 
            <Route path='/trailer' element={<Trailer/>} /> 
            <Route path='/tv-shows' element={<TvShowList/>} /> 
            <Route path='/favoriteMovies' element={<FavoriteMovie/>} /> 
            <Route path='/searchedPerson' element={<SearchedPersonsList/>} /> 
            <Route path='/moviesByPerson' element={<MoviesByPerson/>} /> 
        </Routes>
    </div>
  );
}
export default App;