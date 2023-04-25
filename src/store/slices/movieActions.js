import { favoriteMovieApi2 } from '../apis/favoriteMovieApi';

export const addMovieToFavorites = (movie) => async (dispatch) => {
  try {
    const response = await fetch(favoriteMovieApi2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });

    const data = await response.json();

    dispatch({
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteMovieFromFavorites = (movie) => async (dispatch) => {
  try {
    const response = await fetch( {
      url: `favoriteMovies/${movie.id}`, 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });

    const data = await response.json();

    dispatch({
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

