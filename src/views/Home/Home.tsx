import React, {useEffect, useState} from 'react';
import './Home.css'
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {PostRecord} from "../../../../back/records/post.record";
import {Link} from "react-router-dom";

export const Home = () => {

    const [drinks, setDrinks] = useState<PostRecord[] | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/drinks')
            const data = await res.json();
            setDrinks(data.allDrinks)
        })()
    },[])

    if(drinks === null){
        return null
    }

    return (
        <div className={'home'} style={{backdropFilter: 'grayscale(90%)', width: '100%', height: '100%', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            <Box sx={{maxWidth: '1024px'}}>
                    {drinks.map(drink => (
                        <Link key={drink.id} style={{textDecoration: 'none'}} to={`/drinks/${drink.id}`}>
                            <Card  sx={{bgcolor: 'primary.light', width: {sx: '400px', md:'800px'}, height: {sx: '200px', md:'400px'}, mb: '30px'}}>
                                    <CardActionArea onClick={() => {console.log(drink.id)}} sx={{display: 'flex', height: '100%'}}>
                                        <Box  sx={{width: '50%', height: '100%', display: "flex", justifyContent: 'center', alignItems:'center', position: "relative"}}>
                                            <CardMedia
                                                component="img"
                                                image={`/drinks/${drink.img}`}
                                                alt={drink.title}
                                                sx={{maxHeight: {sx: '200px', md:'400px'}, maxWidth: {sx: '400px', md:'800px'}, width: "auto", zIndex:1}}
                                            />
                                            <Box sx={{
                                                    position: 'absolute',
                                                    width: {sx: '150px', md:'300px'},
                                                    height: {sx: '150px', md:'300px'},
                                                    background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)",
                                                    borderRadius: '50%',
                                                    filter: 'blur(7px)',
                                                }}/>
                                        </Box>
                                        <CardContent sx={{width: '50%'}}>
                                            <Typography align="center" gutterBottom variant="h3" component="div">
                                                {drink.title}
                                            </Typography>
                                            {drink.ingredients.split(',').map((el, index) => <Typography variant="h6" align="center" key={index} sx={{color: 'text.secondary'}}>{el}</Typography>)}
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                        </Link>
                    ))}
            </Box>
        </div>
    );
};


                 