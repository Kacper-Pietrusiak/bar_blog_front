import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress, Paper, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {apiUrl} from "../../utils/api";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SingleDrink = () => {
    const {drinkId} = useParams()
    const [drink, setDrink] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/drinks/${drinkId}`)
            const data = await res.json();

            setDrink(data)
        })()
    },[])

    if(drink === null){
        return <CircularProgress size={'100px'} sx={{ color: 'secondary.main', position: 'absolute', top:'50%', left: '50%'}} disableShrink />
    }

    console.log(drinkId)

    return (
        <Paper sx={{m:2, p: 3, boxSizing: 'border-box', display: 'flex', flexWrap:'wrap'}}>
            <Box width={'100%'} sx={{pb: 4, px:4, color: 'primary.main'}}><Link style={{textDecoration: 'none'}} to={'/drinks'}><Button variant={'text'}><ArrowBackIcon/> Go back</Button></Link></Box>
            <Box sx={{width: '50%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box sx={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '10px double',
                    borderColor:'text.secondary',
                    borderRadius: '15px',
                    width: {xs: '200px', sm:'250px', md: '400px', lg: '500px', xl: '600px'},
                    height: {xs: '200px', sm:'250px', md: '400px', lg: '500px', xl: '600px'}}}>
                    <img src={`/drinks/${drink.img}`} style={{maxWidth: '100%', maxHeight: '100%'}} alt=""/>
                </Box>
            </Box>
            <Box sx={{width: '50%', display:'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                <Box sx={{width:'90%', height: '90%', position: 'absolute', bgcolor: 'secondary.main', borderRadius: '50%', filter: 'blur(7px)', opacity:'70%'}}/>
                <Box sx={{zIndex: '1'}}>
                <Typography align="center" gutterBottom variant="h1" component="div">
                    {drink.title}
                </Typography>
                {drink.ingredients.split(',').map((el, index) => <Typography variant="h4" align="center" key={index}>{el}</Typography>)}
                </Box>
            </Box>
            <Box width={'100%'} sx={{pt: 4, px:4}}>
                <Typography variant={'h5'} color={'primary.main'}>{drink.text}</Typography>
            </Box>
        </Paper>
    );
};

