import React from 'react';
import {Box, Button, styled} from "@mui/material";
import './AddForm.css'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Post } from '../../../../back/types';
import { CssTextField } from '../../utils/TextFields';


type OmitPost = Omit<Post, 'id'>

export const AddForm = () => {

    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 100px)'}}>
            <Box sx={{width: '50%', minWidth:'600px', bgcolor: 'primary.main', opacity: '90%'}}>
                <Formik
                    initialValues={{
                        title: '',
                        img: '',
                        text: '',
                        ingredients: '',
                    }}
                    onSubmit={(
                        values: OmitPost,
                        { setSubmitting }: FormikHelpers<OmitPost>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >

                    <Form style={{display: "flex", width: '100%',  padding: '30px 10px', boxSizing: "border-box", justifyContent:'space-around'}}>
                        <Box sx={{display: 'flex', flexDirection: "column", p:1, width: '40%'}}>
                            <CssTextField label="Title" name={'title'} id="custom-css-outlined-input" />
                            <CssTextField label="Text" multiline rows={4} name={'text'} id="custom-css-outlined-input" />
                            <CssTextField label="Ingredients" multiline rows={4} name={'ingredients'} id="custom-css-outlined-input" />
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: "column", width: '40%'}}>
                            <Button fullWidth variant={'contained'} type={"submit"} sx={{bgcolor: 'secondary.light',mt: 1, '& :hover': {bgcolor: 'secondary.main'}}}>Submit</Button>
                        </Box>

                    </Form>

                </Formik>
            </Box>
        </Box>
    );
};

