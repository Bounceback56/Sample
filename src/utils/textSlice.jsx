import { createSlice } from "@reduxjs/toolkit";
const textSlice=createSlice({
    name:"text",
    initialState:{
        searchText:""
    },
    reducers:{
        setSearchText:(state,action)=>{
            state.searchText=action.payload;
        },
        clearSearchText:(state)=>{
            state.searchText="";
        }
    }
});
export const {setSearchText,clearSearchText} = textSlice.actions;
export default textSlice.reducer;