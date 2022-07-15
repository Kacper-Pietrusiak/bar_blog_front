import React, {SyntheticEvent, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiUrl} from "../../utils/api";
import {Alert, Box, Button, CircularProgress, Typography} from "@mui/material";
import {CssTextField} from "../../utils/TextFields";

export const Edit = () => {
    const [loading, setLoading] = useState(true);
    const {drinkId} = useParams()
    const [drink, setDrink] = useState(null)
    const [edit, setEdit] = useState(false)
    const [form, setForm] = useState({
        title: '',
        text: '',
        ingredients: '',
        img: '',
    });

    const saveAd = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/admin/posts/edit/${drinkId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });


        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key, value) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/admin/posts/edit/${drinkId}`)
            const data = await res.json();

            setEdit(true)
            setDrink(data)
            setForm(data)
            setLoading(false)

        })()
    },[])

    if(loading){
        return <CircularProgress size={'100px'} sx={{ color: 'secondary.main', position: 'absolute', top:'50%', left: '50%'}} disableShrink />
    }


    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', position:'relative'}}>
            {edit ? <Alert variant="filled" severity="success" color="success" sx={{position: "absolute", top: '0',}}>Successfully edited post on blog</Alert> : null}
            <Box sx={{width: '80%', minWidth:'600px', bgcolor: 'primary.main', opacity: '90%', mt: 10}}>
                <form style={{display: "flex", width: '100%',  padding: '30px 10px', boxSizing: "border-box", justifyContent:'space-around'}} onSubmit={saveAd}>
                    <Box sx={{display: 'flex', flexDirection: "column", p:1, width: '80%'}}>
                        <CssTextField label="Title" name={'title'} id="title" required value={form.title} onChange={e => updateForm('title', e.target.value)}/>
                        <CssTextField label="Image" name={'image'} id="image"  required value={form.img} onChange={e => updateForm('img', e.target.value)}/>
                        <CssTextField label="Text" multiline rows={4} name={'text'} id="text"  required value={form.text} onChange={e => updateForm('text', e.target.value)}/>
                        <CssTextField label="Ingredients" multiline rows={4} name={'ingredients'} id="text" required value={form.ingredients} onChange={e => updateForm('ingredients', e.target.value)}/>
                        <Button fullWidth variant={'contained'} type={"submit"} sx={{bgcolor: 'secondary.light',mt: 1, mb:4, '& :hover': {bgcolor: 'secondary.main'}}}>Edit</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

