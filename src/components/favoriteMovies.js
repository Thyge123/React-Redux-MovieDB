import { useFetchMoviesQuery } from "../store";
import MovieCard from "./movieCard";
import { useSelector } from "react-redux";
import { changeIsFavorite } from "../store";

function FavoriteMoviesList() {                                  
  const { data, error, isLoading } = useFetchMoviesQuery();  
  console.log(data, error, isLoading);

  const isFavorite = useSelector((state) => {
    //console.log(state.searchMovie.searchTerm);
    return state.favoriteMovie.isFavorite;
});

console.log(isFavorite)
                 
  let content;
  if (isLoading) {
    content = <div>Loading...</div>
  } else if (error) {
    content = <div>Error loading movies: {error.message}</div>;
  }else {
    content = data.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  } 
  
  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default FavoriteMoviesList;
