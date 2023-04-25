import { createSlice } from "@reduxjs/toolkit";

const searchPersonSlice = createSlice({
  name: "searchPerson",
  initialState: {
    searchTerm: "",
    selectedPerson: [],
  },
  reducers: {
    changePersonSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    selectPerson(state, action) {
      state.selectedPerson = action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(changePersonSearchTerm, (state, action) => {
        state.searchTerm = '';
    });
}
});

export const { changePersonSearchTerm, selectPerson} =
  searchPersonSlice.actions;

export const searchPersonReducer = searchPersonSlice.reducer;
