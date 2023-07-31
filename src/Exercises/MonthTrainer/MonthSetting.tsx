import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import Box from "@mui/material/Box";

interface props {
    step: number
    handleIsRandom: (isRandom: boolean) => void
    isRandom: boolean
    restart: () => void
    isSeason: boolean
    setIsSeason: (isSeason: boolean) => void
}

const MonthSetting: React.FC<props> = ({handleIsRandom, isRandom, setIsSeason, isSeason}) => {

    return (
        <Box>
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
        </Box>
    );
};

export default MonthSetting;
