import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {AddForm} from "./views/AddForm/AddForm";
import {History} from "./views/History/History";
import {Box, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {darkTheme, lightTheme} from "./styles/theme";
import Nav from "./components/Nav/Nav";
import {SingleDrink} from "./components/SingleDrink/SingleDrink";
import Scrollbars from "react-custom-scrollbars-2";
import {Admin} from "./components/Table/Admin";
import {Account} from "./components/Table/Account";
import { Table } from './components/Table/Table';
import {Users} from "./components/Table/Users";
import {Edit} from "./components/Edit/Edit";

function App() {



    // @ts-ignore
    const {mode} = useSelector(store => store.theme)


  return (
      <Scrollbars style={{ width: '100%', height: '100vh'}}>
          <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
            <Box sx={{backgroundImage: 'url("/img/background.jpg")', backgroundAttachment: 'fixed',  minHeight: '100vh', backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
                <Nav/>
              <Routes>
                  <Route path={'drinks/add'} element={<AddForm/>}/>
                  <Route path={'/drinks'} element={<Home/>}/>
                  <Route path={'/admin'} element={<Admin/>}>
                      <Route path={'account'} element={<Account/>}/>
                      <Route path={'posts'} element={<Table/>}/>
                      <Route path={'posts/edit/:drinkId'} element={<Edit/>}/>
                      <Route path={'users'} element={<Users/>}/>
                  </Route>
                  <Route path={'drinks/:drinkId'} element={<SingleDrink/>}/>
              </Routes>
            </Box>
          </ThemeProvider>
      </Scrollbars>
  );
}

export default App;
