import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#048c04',
        },
        background: {
            default: '#282828',
            paper: '#dddddd',
        },
        text: {
            primary: '#fff',
            secondary: '#95ff95',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})


export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#048c04',
        },
        background: {
            default: '#c7c7c7',
            paper: '#444',
        },
        text: {
            primary: '#000',
            secondary: '#95ff95',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})
