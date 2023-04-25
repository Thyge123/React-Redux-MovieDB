import {createSlice} from '@reduxjs/toolkit';
const searchGenreSlice = createSlice({
    name: 'searchGenre',
    initialState: {
        selectedGenre: "",
    },
    reducers:{
        changeSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
          },  
    },
    extraReducers(builder){
        builder.addCase(changeSelectedGenre, (state, action) => {
            state.selectedGenre = "";
        });
    }
})

export const { changeSelectedGenre } =
  searchGenreSlice.actions;

export const searchGenreReducer = searchGenreSlice.reducer;
