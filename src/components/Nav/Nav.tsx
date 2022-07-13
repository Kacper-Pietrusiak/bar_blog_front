import {Box} from '@mui/material';
import React from 'react';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CastleIcon from '@mui/icons-material/Castle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { NavLink} from "react-router-dom";

const Navigation = () => {

    const links = [
        {path: 'drinks', icon: <LocalBarIcon sx={{fontSize: '50px', color: 'secondary.main'}}/> },
        {path: 'history', icon: <CastleIcon sx={{fontSize: '50px', color: 'secondary.main'}}/> },
        {path: 'add', icon: <PostAddIcon sx={{fontSize: '50px', color: 'secondary.main'}}/> }
    ]

    let liStyle = {
        width: '200px',
        height: '100%'

    };


    return (
        <Box sx={{ width: '100%', boxSizing:"border-box", bgcolor: 'primary.main'}}>
            <nav>
                <ul style={{display: 'flex', height: '100px', listStyle: 'none', justifyContent: 'end', alignItems: "center"}}>
                    {links.map(link => (
                        <li key={link.path} style={liStyle}>
                            <NavLink
                                to={link.path}
                            >
                                <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: "relative"}}>
                                    {link.icon}
                                    <span style={{position: 'absolute', display:'block', width: '2px', backgroundColor:'#999', height: '40px', left: '0'}}/>
                                </Box>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
};

export default Navigation;
