import React, {useEffect, useState} from 'react';
import {
    Box,
    CircularProgress,
    Paper, Switch,
    Typography
} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import Scrollbars from "react-custom-scrollbars-2";
import {apiUrl} from "../../utils/api";
import {Link} from "react-router-dom";

export const Table = () => {

    const [drinks, setDrinks] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch('http://localhost:3001/drinks')
            const data = await res.json();
            setDrinks(data.allDrinks)
            setLoading(false)
        })()
    },[])


    const handleDelete = async ( id) => {

        if(!window.confirm('Are you sure u want delete this post?')){
            return
        }

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/admin/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                }),
            });
            const data = await res.json();
            setDrinks(data)

        } finally {
            setLoading(false);
        }
    }

    if(loading){
        return <CircularProgress size={'100px'} sx={{ color: 'secondary.main', position: 'absolute', top:'50%', left: '50%'}} disableShrink />
    }

    return (
        <Box height={'700px'}>
            <Scrollbars className={'track-vertical'} style={{width:'100%', height:'100%'}}>
            {drinks.map(drink => (
                <Paper key={drink.id} sx={{py: 1, my: 1, height: '100px', display: 'flex', alignItems: 'center', minWidth: '1024px'}}>
                    <Typography width={'20%'} color={'primary.main'} sx={{borderRight: '2px solid black', lineHeight: '300%'}} align={'center'}>{drink.id}</Typography>
                    <Typography width={'20%'} color={'primary.main'} sx={{borderRight: '2px solid black', lineHeight: '300%'}} align={'center'}>{drink.title}</Typography>
                    <Typography width={'20%'} color={'primary.main'} sx={{borderRight: '2px solid black', lineHeight: '300%'}} align={'center'}>{drink.ingredients}</Typography>
                    <Typography width={'20%'} color={'primary.main'} sx={{borderRight: '2px solid black', lineHeight: '300%'}} align={'center'}>{drink.createdAt}</Typography>
                    <Box width={'20%'} sx={{display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <Switch/>
                        <CancelIcon sx={{color: '#c50000', fontSize:'xx-large', cursor: 'pointer'}} onClick={() => handleDelete(drink.id)}/>
                        <Link to={`edit/${drink.id}`}><EditIcon sx={{color: '#2958ff', fontSize:'xx-large', cursor: 'pointer'}}/></Link>
                    </Box>
                </Paper>
            ))}
            </Scrollbars>

        </Box>
    );
};

