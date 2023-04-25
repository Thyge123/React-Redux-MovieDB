import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(changeSearchTerm, (state, action) => {
        state.searchTerm = '';
    });
}
});

export const { changeSearchTerm, changeSelectedGenre} =
  searchMovieSlice.actions;

export const searchMovieReducer = searchMovieSlice.reducer;
