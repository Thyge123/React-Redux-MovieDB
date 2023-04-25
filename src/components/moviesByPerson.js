import { useSelector } from "react-redux";
import MovieCard from "./movieCard";

const MoviesByPerson = ({movies}) => {
  const cast = useSelector((state) => {
    //console.log(state.searchMovie.searchTerm);
    return state.searchPerson.selectedPerson;
});


let content = cast.filter(movie => movie.poster_path !== null).map((movie) => {
  return <MovieCard key={movie.id} movie={movie}></MovieCard>
});
    return (
      <div>
         <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
      </div>
    );
  };
  
  export default MoviesByPerson;