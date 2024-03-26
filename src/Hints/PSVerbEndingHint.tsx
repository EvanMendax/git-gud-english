import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {BoldText} from "../Common/BoldText";

export const PsVerbEndingHint = () => {
    return (
        <div>
            <Typography variant={'h4'} textAlign={"center"}>Verb in the third person in Present Simple</Typography>
            <Box sx={{m: 5}}>
                <Typography>
                    - If word ending is
                    <BoldText>-o, -ss, -sh, -ch, -x, -z</BoldText>
                    need add
                    <BoldText>-es</BoldText> ending.
                </Typography>
                <Typography>
                    - If word ending is
                    <BoldText>-y</BoldText>
                    end in front of her consonant letter need change
                    <BoldText>-y</BoldText>
                    to
                    <BoldText>-ies</BoldText>
                    ending.
                </Typography>
                <Typography>
                    - If word ending is
                    <BoldText>-y</BoldText>
                    end in front of her vowels letter
                    <BoldText>(A, O, U, Y, E, I)</BoldText>
                    need add
                    <BoldText>-s</BoldText>
                    ending.
                </Typography>
            </Box>
        </div>
    );
};

