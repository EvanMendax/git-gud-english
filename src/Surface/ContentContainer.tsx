import React from 'react';
import {Paper} from "@mui/material";
import {Outlet} from 'react-router-dom';

const ContentContainer = () => {
    return (
        <Paper elevation={20} sx={{bgcolor: '#f6f0ff', ml: '20px', p: 4}}>
            <Outlet/>
        </Paper>
    );
};

export default ContentContainer;