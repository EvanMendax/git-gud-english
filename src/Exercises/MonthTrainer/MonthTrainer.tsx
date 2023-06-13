import * as React from 'react';
import {useState} from 'react';
import Box from "@mui/material/Box";
import SideMenu from "./SideMenu";
import MouthExercise from "./MouthExercise";
import CompleteExercise from "../../Common/CompleteExercise";

export type exercise = {
    question: string
    engAnswer: string[]
    uaAnswer: string[]
    engSeason: string[]
}

const questions = [
    {
        question: 'First month of year?',
        engAnswer: ['January'],
        uaAnswer: ['Січень'],
        engSeason: ['Winter']
    },
    {
        question: 'Second month of year?',
        engAnswer: ['February',],
        uaAnswer: ['Лютий'],
        engSeason: ['Winter',]
    }, {
        question: 'Third month of year?',
        engAnswer: ['March'],
        uaAnswer: ['Березень'],
        engSeason: ['Spring']
    },
    {
        question: 'Fourth month of year?',
        engAnswer: ['April'],
        uaAnswer: ['Квітень'],
        engSeason: ['Spring']
    }, {
        question: 'Fifth month of year?',
        engAnswer: ['May'],
        uaAnswer: ['Травень'],
        engSeason: ['Spring']
    },
    {
        question: 'Sixth month of year?',
        engAnswer: ['June'],
        uaAnswer: ['Червень'],
        engSeason: ['Summer']
    }, {
        question: 'Seventh month of year?',
        engAnswer: ['July'],
        uaAnswer: ['Липень'],
        engSeason: ['Summer']
    },
    {
        question: 'Eighth month of year?',
        engAnswer: ['August'],
        uaAnswer: ['Серпень'],
        engSeason: ['Summer']
    }, {
        question: 'Ninth month of year?',
        engAnswer: ['September'],
        uaAnswer: ['Вересень'],
        engSeason: ['Autumn', 'Fall']
    },
    {
        question: 'Tenth month of year?',
        engAnswer: ['October'],
        uaAnswer: ['Жовтень'],
        engSeason: ['Autumn', 'Fall']
    }, {
        question: 'Eleventh month of year?',
        engAnswer: ['November'],
        uaAnswer: ['Листопад'],
        engSeason: ['Autumn', 'Fall']
    },
    {
        question: 'Twelfth month of year?',
        engAnswer: ['December'],
        uaAnswer: ['Лютий'],
        engSeason: ['Winter']
    },
]
const shuffleQuestion = (array: any[]) => {
    const temporaryArray = [...array]
    for (let i = temporaryArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [temporaryArray[i], temporaryArray[j]] = [temporaryArray[j], temporaryArray[i]];
    }
    return temporaryArray
}

const MonthTrainer = () => {

    const [isRandom, setIsRandom] = useState<boolean>(false)
    const [currentStep, setCurrentStep] = useState<number>(13)
    const [currentsQuestion, setCurrentsQuestion] = useState<exercise[]>(questions)

    const restart = () => {
        setCurrentStep(1)
        if (isRandom) {
            setCurrentsQuestion(shuffleQuestion(questions))
        } else {
            setCurrentsQuestion(questions)
        }
    }
    const handleIsRandom = (isRandom: boolean) => {
        setCurrentStep(1)
        setIsRandom(isRandom)
        if (isRandom) {
            setCurrentsQuestion(shuffleQuestion(questions))
        } else {
            setCurrentsQuestion(questions)
        }
    }
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
            <SideMenu restart={restart} step={currentStep} handleIsRandom={handleIsRandom} isRandom={isRandom}/>
            {
                currentStep < 13
                    ? <MouthExercise setCurrentStep={setCurrentStep} exercise={currentsQuestion[currentStep - 1]}
                                     step={currentStep}/>
                    : <CompleteExercise setCurrentStep={setCurrentStep}/>
            }
        </Box>
    );
};

export default MonthTrainer;
