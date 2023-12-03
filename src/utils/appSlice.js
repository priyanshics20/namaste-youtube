import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app", 
    initialState: {
        ismenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.ismenuOpen = !state.ismenuOpen;
        },
        closeMenu: (state) => {
            state.ismenuOpen = false;
        }
    },
});

export const { toggleMenu , closeMenu } = appSlice.actions;
export default appSlice.reducer;