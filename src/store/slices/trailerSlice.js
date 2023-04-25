import {createSlice} from '@reduxjs/toolkit';
const trailerSlice = createSlice({
    name: 'trailer',
    initialState: {
        trailer: '',
    },
    reducers:{
        playTrailer(state, action){
            state.trailer= action.payload;
        },
    }
})

export const {playTrailer} = trailerSlice.actions;
export const trailerReducer = trailerSlice.reducer;  //combined reducers