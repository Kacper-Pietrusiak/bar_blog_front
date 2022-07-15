import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Admin = () => {

    return (
        <Box width={'100%'} height={'100vh'} sx={{bgcolor: 'primary.light'}}>
            <Box sx={{maxWidth: '1920px', margin: 'auto'}}>
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'space-between',
                        py: 4.5,
                        px: 3,
                    }}
                >
                    <Box>
                        <Typography variant='h4' sx={{lineHeight: '44px', fontWeight: 700, color: 'text.primary'}}>Admin</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", mx: 4, mb: 4}}>
                    <NavLink
                        to="account"
                        style={({isActive}) => ({color: isActive ? '#5048E5' : '#6B7280', borderBottom: isActive ? '2px solid #5048E5' : 'none', marginRight: '32px', fontWeight: '500', textDecoration: 'none', paddingTop: '12px', paddingBottom: '12px'})}
                    >
                        <Typography sx={{fontWeight: 500}}>Account</Typography>
                    </NavLink>
                    <NavLink
                        to="posts"
                        style={({isActive}) => ({color: isActive ? '#5048E5' : '#6B7280', borderBottom: isActive ? '2px solid #5048E5' : 'none', marginRight: '32px', fontWeight: '500', textDecoration: 'none',  paddingTop: '12px', paddingBottom: '12px'})}
                    >
                        <Typography sx={{fontWeight: 500}}>Posts</Typography>
                    </NavLink>
                    <NavLink
                        to="users"
                        style={({isActive}) => ({color: isActive ? '#5048E5' : '#6B7280', borderBottom: isActive ? '2px solid #5048E5' : 'none', marginRight: '32px', fontWeight: '500', textDecoration: 'none',  paddingTop: '12px', paddingBottom: '12px'})}
                    >
                        <Typography sx={{fontWeight: 500}}>Users</Typography>
                    </NavLink>
                </Box>

                <Outlet/>
            </Box>
        </Box>
    );
};

