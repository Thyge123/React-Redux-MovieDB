import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchTrailerMutation, deleteFavoriteMovie } from "../store";
import { playTrailer } from "../store"; 
import { addMovieToFavorites } from "../store";
import { useState } from 'react';
import { useRemoveMovieMutation } from "../store";
import { useFetchMovieMutation } from "../store";
import { useEffect } from "react";
import { changeIsFavorite } from "../store";
import { useSelector } from "react-redux";

function MovieCard({movie}){
    const [isFavorite, setIsFavorite] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [fetchVideo, result] = useFetchTrailerMutation();
    const handleSubmit = () => {
         fetchVideo(movie);
         if(result.isSuccess) {
            //console.log(result);
            let key = result.data.results[0].key;
            //console.log(result.data.id)
            dispatch(playTrailer(key));
            navigate("/trailer");
         } 
    }   


    const [fetchMovie, result2] = useFetchMovieMutation();    
     useEffect(() => {
    async function fetchGenres() {
      await fetchMovie(movie);
      if (result2.isSuccess) {
        //console.log(result2.data)
        //console.log(result2.data.genres);
        setGenres(result2.data.genres);
      }
    } fetchGenres();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMovie, movie, result2.isSuccess]); 

   const [genres, setGenres] = useState([]);
  
    const handleAddToFavorites = () => {
      dispatch(addMovieToFavorites(movie));
      setIsFavorite(true);
      dispatch(changeIsFavorite(true))
      console.log(changeIsFavorite)
    };

    const [DeleteMovie, results] = useRemoveMovieMutation();
    const handleDelete = () => {
        DeleteMovie(movie);
        if(results.isSuccess) {
           //console.log(result);
           dispatch(deleteFavoriteMovie(movie.id));
        } 
   }   

    //console.log(movie)

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + movie.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0,200)}</span></h5>
                    <div id="rating" style={{position: "relative", right:"18px"}}>
                    <button onClick={handleAddToFavorites} type="button" class="btn btn-link">{changeIsFavorite ? <span className="far fa-star" aria-hidden="true"></span> : <span className="fa fa-star" aria-hidden="true"></span>}</button><span className="ml-1">{movie.vote_average}</span></div>
                    <p className="card-text">{movie.overview.substring(0,125).concat('....')}</p>
                    {genres.length > 0 && (
                    <div>
                        <p>Genres:</p>
                        <ul style={{ listStyleType: 'none' }}>
                         {genres.map((genre) => (
                        <li key={genre.id} style={{ position: "relative", right: "40px"}}>{genre.name}</li>
                        ))}
                         </ul>
                        </div>
                    )} 
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span></div> 
                    <br></br>
                    <div id="buttons" style={{position: "relative", right:"18px"}}>
                    <button onClick={handleSubmit} type="button" class="btn btn-link"><span className="far fa-play-circle"></span></button>           
                    <button onClick={handleDelete} type="button" class="btn btn-link"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
      );
}
      
export default MovieCard;