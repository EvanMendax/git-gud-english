import * as React from 'react';
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const MonthTrainer = () => {

    const questions = [
        {question: 'First month of year?', engAnswer: ['january', 'January'], uaAnswer: ['Січень', 'січень']},
        {question: '1First month of year?', engAnswer: ['january', 'January'], uaAnswer: ['Січень', 'січень']},
    ]
    const randomQuestion = Math.floor(Math.random() * questions.length);

    const checkResult = () => {

    }

    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', p: 4}}>
            <Typography sx={{fontSize: 30, fontWeight: 600, pb: 1}}>
                {questions[randomQuestion].question}
            </Typography>
            <Box sx={{m: 1, height: 80}}>
                <TextField label='In English' variant='outlined' helperText={'1'}/>
            </Box>
            <Box sx={{m: 1, height: 80}}>
                <TextField label='In Ukrainian' variant='outlined' error helperText={'1'} />
            </Box>
            <Box>
                <Button variant='contained' sx={{color: 'white', bgcolor: 'black', m: 1}}>Check</Button>
                <Button disabled variant='contained' sx={{color: 'white', bgcolor: 'black', m: 1}}>Next</Button>
            </Box>
        </Box>
    );
};

export default MonthTrainer;
