import React from 'react';
import {Checkbox, FormControlLabel, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface props {
    step: number
    handleIsRandom: (isRandom: boolean) => void
    isRandom: boolean
    restart: () => void
    isSeason: boolean
    setIsSeason: (isSeason: boolean) => void
}

const MonthSideMenu: React.FC<props> =
    ({step, handleIsRandom, isRandom, restart, setIsSeason, isSeason}) => {

    const currenStep = step > 12 ? 12 : step

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
                <Typography sx={{fontSize: 25, mb: 1}}>Step {currenStep}/12</Typography>
                <Box sx={{width: '60%'}}>
                    <FormControlLabel sx={{mb: 1}} control={
                        <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                  onClick={() => handleIsRandom(!isRandom)} checked={isRandom}/>
                    } label="Random"/>
                    <FormControlLabel sx={{mb: 1}} control={
                        <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                  onClick={() => setIsSeason(!isSeason)} checked={isSeason}/>
                    } label="Season"/>
                </Box>
                <Button onClick={restart} variant='contained'
                        sx={{color: 'white', bgcolor: 'black', m: 1}}>Restart</Button>
            </Paper>
        </Box>
    );
};

export default MonthSideMenu;
