import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeMode: (state) => {
            state.mode = (state.mode === 'dark' ? 'light' : 'dark')
        }
    }
})

export const {changeMode} = themeSlice.actions
export default themeSlice.reducer