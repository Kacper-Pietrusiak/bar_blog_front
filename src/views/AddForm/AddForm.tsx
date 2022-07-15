import React, {SyntheticEvent, useState} from 'react';
import {Alert, Box, Button, CircularProgress, Input, TextField} from "@mui/material";
import './AddForm.css'
import { CssTextField } from '../../utils/TextFields';
import {apiUrl} from "../../utils/api";


export const AddForm = () => {

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        title: '',
        text: '',
        ingredients: '',
        img: '',
    });

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/drinks/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
            const data = await res.json();

            setId(data.id);

        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <CircularProgress size={'100px'} sx={{ color: 'secondary.main', position: 'absolute', top:'50%', left: '50%'}} disableShrink />
    }

    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 100px)', position:'relative'}}>
            {id ? <Alert variant="filled" severity="success" color="success" sx={{position: "absolute", top: '0',}}>Successfully added post on blog</Alert> : null}
            <Box sx={{width: '50%', minWidth:'600px', bgcolor: 'primary.main', opacity: '90%'}}>
                    <form style={{display: "flex", width: '100%',  padding: '30px 10px', boxSizing: "border-box", justifyContent:'space-around'}} onSubmit={saveAd}>
                        <Box sx={{display: 'flex', flexDirection: "column", p:1, width: '40%'}}>
                            <CssTextField label="Title" name={'title'} id="title" required value={form.title} onChange={e => updateForm('title', e.target.value)}/>
                            <CssTextField label="Image" name={'image'} id="image"  required value={form.img} onChange={e => updateForm('img', e.target.value)}/>
                            <CssTextField label="Text" multiline rows={4} name={'text'} id="text"  required value={form.text} onChange={e => updateForm('text', e.target.value)}/>
                            <CssTextField label="Ingredients" multiline rows={4} name={'ingredients'} id="text" required value={form.ingredients} onChange={e => updateForm('ingredients', e.target.value)}/>
                            <Button fullWidth variant={'contained'} type={"submit"} sx={{bgcolor: 'secondary.light',mt: 1, mb:4, '& :hover': {bgcolor: 'secondary.main'}}}>Submit</Button>
                        </Box>
                    </form>
            </Box>
        </Box>
    );
};






