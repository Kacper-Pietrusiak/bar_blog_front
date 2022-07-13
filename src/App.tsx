import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {AddForm} from "./views/AddForm/AddForm";
import {History} from "./views/History/History";
import {Box, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {darkTheme} from "./styles/theme";
import Nav from "./components/Nav/Nav";

function App() {



    // @ts-ignore
    const {mode} = useSelector(store => store.theme)



  return (
      <ThemeProvider theme={darkTheme}>
        <Box sx={{backgroundImage: 'url("/img/background.jpg")', minHeight: '100vh', backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
            <Nav/>
          <Routes>
              <Route path={'/add'} element={<AddForm/>}/>
              <Route path={'/drinks'} element={<Home/>}/>
              <Route path={'/history'} element={<History/>}/>
          </Routes>
        </Box>
      </ThemeProvider>
  );
}

export default App;
