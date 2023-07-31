import React from 'react';
import Box from "@mui/material/Box";

interface props {
    children: React.ReactElement[]
}

const ExerciseWrapper:React.FC<props> = ({children}) => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
            {children}
        </Box>
    );
};

export default ExerciseWrapper;