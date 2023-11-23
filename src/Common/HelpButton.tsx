import React from 'react';
import Box from "@mui/material/Box";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";
import {fieldNames} from "../Exercises/MonthTrainer/MouthExercise";

interface props {
    showRightAnswer: (fieldName: fieldNames, rightAnswer: string) => void
    fieldName: fieldNames
    rightAnswer: string
}
export const HelpButton:React.FC<props> = ({showRightAnswer, fieldName, rightAnswer}) => {

    const handleClick = () => showRightAnswer(fieldName, rightAnswer)

    return (
        <Box sx={{ml: 0.5}}>
            <Tooltip title="Find out the rigth ansver" placement={'top'}>
                <IconButton sx={{p: 0.3}} onClick={handleClick}>
                    <HelpOutlineIcon sx={{color: '#827a7a', fontSize: 21, '&:hover': {color: '#1e69a1'}}}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

