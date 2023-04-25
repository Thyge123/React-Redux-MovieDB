import { useSelector, useDispatch } from "react-redux";
import { changeSelectedGenre } from "../store";

function SearchGenre() {
 
  const dispatch = useDispatch();

  const genre = useSelector((state) => {
    return state.searchMovie.selectedGenre;
  });
  const handleGenreTermChange = (event) => {
    dispatch(changeSelectedGenre(event.target.value));
    event.preventDefault();
  }
  
  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault();
                 //navigate("/searchedGenre");
  }
  return (
    <div>
       <label>Filter</label>
        <select class="form-select" value={genre} onChange={handleGenreTermChange} style={{margin: "10px", marginLeft: "18px"}}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>
      <button type="button" class="btn btn-dark btn-sm" onClick={handleSubmit}>Filter</button>
    </div>
  );
}
export default SearchGenre;