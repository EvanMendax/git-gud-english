import React from 'react';
import Box from "@mui/material/Box";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";

interface props {
    showRightAnswer: () => void
}

export const HelpButton: React.FC<props> = ({showRightAnswer}) => {

    return (
        <Box sx={{ml: 0.5}}>
            <Tooltip title="Find out the rigth ansver" placement={'top'}>
                <IconButton tabIndex={-1} sx={{p: 0.3}} onClick={() => showRightAnswer()}>
                    <HelpOutlineIcon sx={{color: '#827a7a', fontSize: 21, '&:hover': {color: '#1e69a1'}}}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

