import React, {Dispatch} from 'react';
import Box from "@mui/material/Box";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";
import {UseFormSetValue} from "react-hook-form";

interface props {
    setValue: UseFormSetValue<any>
    setCompletedQuestion: Dispatch<React.SetStateAction<boolean[]>>
    fieldName: string
    rightAnswer: string
    fieldIndex: number
}

export const HelpButton: React.FC<props> = (
    {setValue, setCompletedQuestion, fieldIndex, fieldName, rightAnswer}
) => {

    const showRightAnswer = (fieldName: string, rightAnswer: string, fieldIndex: number) => {
        setValue(fieldName, rightAnswer, {shouldValidate: true})
        setCompletedQuestion(prevState => {
            return prevState.map((value, index) => {
                if (index === fieldIndex) return true
                return value
            });
        })
    }


    return (
        <Box sx={{ml: 0.5}}>
            <Tooltip title="Find out the rigth ansver" placement={'top'}>
                <IconButton tabIndex={-1} sx={{p: 0.3}}
                            onClick={() => showRightAnswer(fieldName, rightAnswer, fieldIndex)}>
                    <HelpOutlineIcon sx={{color: '#827a7a', fontSize: 21, '&:hover': {color: '#1e69a1'}}}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

