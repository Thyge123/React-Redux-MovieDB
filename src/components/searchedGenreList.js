import MovieCard from "./movieCard";
import { useSelector } from "react-redux";
import { useFetchGenreIdQuery} from "../store";


function SearchedMoviesList() {  
  //const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => {
      //console.log(state.searchGenre.selectedGenre);
      return state.searchGenre.selectedGenre;
  });
                            
const {data, error, isFetching } = useFetchGenreIdQuery(selectedGenre);   
                                                                
let content;
if (isFetching) {
  content = <div>Loading;</div>
} else if (error) {
  content = <div>Error loading movies.</div>;
} else {
  content = data.results
      .filter(movie => movie.poster_path !== null)
      .map((movie) => {
    return <MovieCard key={movie.id} movie={movie}></MovieCard>
  });
}


  return (
  <div className="row row-cols-3 row-cols-md-2 m-4">
    {content}
  </div>
);
}
export default SearchedMoviesList;
