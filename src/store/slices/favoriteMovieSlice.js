import { createSlice } from '@reduxjs/toolkit';


const favoriteMovieSlice = createSlice({
  name: 'favoriteMovie',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
    movie: '',
    isFavorite: false
  },

  reducers:{
    addFavoriteMovie(state, action){
        state.movie= action.payload;
    },
    deleteFavoriteMovie(state, action){
      state.movie= action.payload;
  },
    changeIsFavorite(state, action){
      state.isFavorite = action.payload;
    },
},
});

export const favoriteMovieReducer = favoriteMovieSlice.reducer;
export const {addFavoriteMovie} = favoriteMovieSlice.actions;
export const {deleteFavoriteMovie} = favoriteMovieSlice.actions;
export const {changeIsFavorite} = favoriteMovieSlice.actions;
