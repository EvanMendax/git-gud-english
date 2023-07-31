import React, {ReactElement} from 'react';
import {Checkbox, FormControlLabel, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface props {
    children: ReactElement
    steps: number
    currentStep: number
    restart: () => void
}

const SideMenu:React.FC<props> = ({children, steps, restart, currentStep}) => {

    const currentStepValue = currentStep > steps ? steps : currentStep

    return (
        <Box>
            <Paper sx={{
                bgcolor: '#dce1f8',
                borderRadius: 2,
                p: 2,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{fontSize: 25, mb: 1}}>Step {currentStepValue}/{steps}</Typography>
                {children}
                <Button onClick={restart} variant='contained'
                        sx={{color: 'white', bgcolor: 'black', m: 1}}>Restart</Button>
            </Paper>
        </Box>
    );
};

export default SideMenu;