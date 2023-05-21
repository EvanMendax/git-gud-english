import * as React from 'react';
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel, Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useState} from "react";
import SideMenu from "./SideMenu";

const questions = [
    {
        question: 'First month of year?',
        engAnswer: ['january', 'January'],
        uaAnswer: ['Січень', 'січень'],
        engSeason: ['Winter', 'winter']
    },
    {
        question: 'Second month of year?',
        engAnswer: ['February', 'february'],
        uaAnswer: ['лютий', 'Лютий'],
        engSeason: ['Winter', 'winter']
    }, {
        question: 'Third month of year?',
        engAnswer: ['march', 'March'],
        uaAnswer: ['Березень', 'березень'],
        engSeason: ['spring', 'Spring']
    },
    {
        question: 'Fourth month of year?',
        engAnswer: ['april', 'April'],
        uaAnswer: ['Квітень', 'квітень'],
        engSeason: ['spring', 'Spring']
    }, {
        question: 'Fifth month of year?',
        engAnswer: ['may', 'May'],
        uaAnswer: ['Травень', 'травень'],
        engSeason: ['spring', 'Spring']
    },
    {
        question: 'Sixth month of year?',
        engAnswer: ['june', 'June'],
        uaAnswer: ['Червень', 'червень'],
        engSeason: ['summer', 'Summer']
    }, {
        question: 'Seventh month of year?',
        engAnswer: ['july', 'July'],
        uaAnswer: ['Липень', 'липень'],
        engSeason: ['summer', 'Summer']
    },
    {
        question: 'Eighth month of year?',
        engAnswer: ['august', 'August'],
        uaAnswer: ['Серпень', 'серпень'],
        engSeason: ['summer', 'Summer']
    }, {
        question: 'Ninth month of year?',
        engAnswer: ['september', 'September'],
        uaAnswer: ['Вересень', 'вересень'],
        engSeason: ['Autumn', 'Fall', 'autumn', 'fall']
    },
    {
        question: 'Tenth month of year?',
        engAnswer: ['october', 'October'],
        uaAnswer: ['Жовтень', 'жовтень'],
        engSeason: ['Autumn', 'Fall', 'autumn', 'fall']
    }, {
        question: 'Eleventh month of year?',
        engAnswer: ['november', 'November'],
        uaAnswer: ['листопад', 'Листопад'],
        engSeason: ['Autumn', 'Fall', 'autumn', 'fall']
    },
    {
        question: 'Twelfth month of year?',
        engAnswer: ['december', 'December'],
        uaAnswer: ['лютий', 'Лютий'],
        engSeason: ['Winter', 'winter']
    },
]

const MonthTrainer = () => {

    const [isRandom, setIsRandom] = useState(false)
    const handleIsRandom = () => setIsRandom(!isRandom)

    const shuffleQuestion = (array: any[]) => {
        const temporaryArray = [...array]
        for (let i = temporaryArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [temporaryArray[i], temporaryArray[j]] = [temporaryArray[j], temporaryArray[i]];
        }
        return temporaryArray
    }

    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
            <SideMenu step={3} handleIsRandom={handleIsRandom} isRandom={isRandom}/>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', p: 4}}>
                <Typography sx={{fontSize: 30, fontWeight: 600, pb: 1}}>
                    {questions[0].question}
                </Typography>
                <Box sx={{m: 1, height: 80}}>
                    <TextField label='In English' variant='outlined' helperText={'1'}/>
                </Box>
                <Box sx={{m: 1, height: 80}}>
                    <TextField label='In Ukrainian' variant='outlined' error helperText={'1'}/>
                </Box>
                <Box sx={{m: 1, height: 80}}>
                    <TextField label='Season (eng)' variant='outlined' error helperText={'1'}/>
                </Box>
                <Box>
                    <Button onClick={() => shuffleQuestion(questions)} variant='contained'
                            sx={{color: 'white', bgcolor: 'black', m: 1}}>Check</Button>
                    <Button variant='contained'
                            sx={{color: 'white', bgcolor: 'black', m: 1}}>Next</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default MonthTrainer;
