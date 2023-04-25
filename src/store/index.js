import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm} from './slices/searchMovieSlice';
import { trailerReducer, playTrailer } from './slices/trailerSlice';
import { favoriteMovieApi } from './apis/favoriteMovieApi';
import { favoriteMovieReducer, addFavoriteMovie, deleteFavoriteMovie, changeIsFavorite } from './slices/favoriteMovieSlice';
import { addMovieToFavorites } from './slices/movieActions';
import { searchGenreReducer, changeSelectedGenre } from './slices/searchGenreSlice';
import { searchPersonReducer, changePersonSearchTerm, selectPerson } from './slices/personSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    [favoriteMovieApi.reducerPath]: favoriteMovieApi.reducer,
    searchMovie: searchMovieReducer,
    trailer: trailerReducer,
    favoriteMovie: favoriteMovieReducer,
    searchGenre: searchGenreReducer,
    searchPerson: searchPersonReducer,

  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware)
    .concat(favoriteMovieApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMovieQuery, useFetchTvShowsQuery, useFetchTrailerMutation, useFetchMovieMutation, useFetchGenreIdQuery, useFetchSearchPersonQuery, useFetchPersonMutation, useFetchSearchTvShowQuery} from './apis/moviesApi';
export {changeSearchTerm}
export {playTrailer}
export {addFavoriteMovie}
export {deleteFavoriteMovie}
export {changeSelectedGenre}
export {useFetchMoviesQuery, useAddMovieMutation, useRemoveMovieMutation, useAddFavoriteMovieMutation} from './apis/favoriteMovieApi';
export {addMovieToFavorites}
export {changePersonSearchTerm}
export {selectPerson}
export {changeIsFavorite}