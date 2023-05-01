import React from 'react';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";

const  linkStyle = {
    color: 'black',
    fontSize: 20,
    textDecoration: 'none'
}

const SideNavigation = () => {
    return (
        <Box  sx={{display: 'flex', flexDirection: 'column'}}>
            <Link style={linkStyle} to='presentSimple'>Present Simple</Link>
            <Link style={linkStyle} to='monthTrainer'>Month Trainer</Link>
        </Box>
    );
};

export default SideNavigation;