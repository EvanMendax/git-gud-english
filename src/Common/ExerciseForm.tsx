import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface props {
    onSubmit: () => void
    children: React.ReactNode
    question: string
    isCompleted: boolean
    nextStep: () => void
}

const ExerciseForm: React.FC<props> = ({onSubmit, children, question, isCompleted, nextStep}) => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', p: 4}}>
            <Typography sx={{fontSize: 30, fontWeight: 600, pb: 1}}>
                {question}
            </Typography>
            <form onSubmit={onSubmit}>
                {children}
                <Box>
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