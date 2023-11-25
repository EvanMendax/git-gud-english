import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Paper} from "@mui/material";

interface props {
    onSubmit: () => void
    children: React.ReactNode
    question: string
    isCompleted: boolean
    nextStep: () => void
}

const questionStyle = {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 600,
    p: 1, pl: 3, pr: 3, m: 2,
    bgcolor: 'rgba(193,176,225,0.13)'
}

const ExerciseForm: React.FC<props> = (
    {onSubmit, children, question, isCompleted, nextStep}
) => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', p: 4, pt: 2}}>
            <Paper sx={questionStyle}>
                {question}
            </Paper>
            <form onSubmit={onSubmit}>
                {children}
                <Box sx={{textAlign: 'center'}}>
                    <Button variant='contained' type={!isCompleted ? 'submit' : 'button'}
                            sx={{color: 'white', bgcolor: 'black', m: 1}}>Check</Button>
                    <Button variant='contained' type={isCompleted ? 'submit' : 'button'} disabled={!isCompleted}
                            onClick={nextStep} sx={{color: 'white', bgcolor: '#225d22', m: 1}}>Next</Button>
                </Box>
            </form>
        </Box>
    );
};

export default ExerciseForm;