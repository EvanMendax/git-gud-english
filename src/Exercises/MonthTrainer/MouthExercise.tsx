import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {exercise} from "./MonthTrainer";
import {useForm} from "react-hook-form";

interface props {
    exercise: exercise
    step: number
    setCurrentStep: (step: number) => void
    isSeason: boolean
}

type formAnswer = {
    engAnswer: string
    uaAnswer: string
    seasonAnswer: string
}

const MouthExercise: React.FC<props> = ({exercise, step, setCurrentStep, isSeason}) => {

    const registerOptions = {required: {value: true, message: 'field is required'}}

    const {register, handleSubmit, setError, setValue, formState: {errors}} = useForm<formAnswer>();
    const [isCompleted, setIsCompleted] = useState(false)

    const nextStep = () => {
        setCurrentStep(step + 1)
        setIsCompleted(false)
        setValue('engAnswer', '')
        setValue('uaAnswer', '')
        setValue('seasonAnswer', '')
    }

    const checkAnswer = (answers: string[], supposition: string): string | undefined => {
        return answers.find(answer => answer.toLowerCase() === supposition.toLowerCase())
    }

    const onSubmit = handleSubmit((data) => {
        const answers = []
        if (!checkAnswer(exercise.engAnswer, data.engAnswer)) {
            setError("engAnswer", {type: "wrongAnswer", message: 'Right answer: ' + exercise.engAnswer[0]});
        } else {
            answers.push(1)
        }
        if (!checkAnswer(exercise.uaAnswer, data.uaAnswer)) {
            setError("uaAnswer", {type: "wrongAnswer", message: 'Right answer: ' + exercise.uaAnswer[0]});
        } else {
            answers.push(1)
        }
        if (!checkAnswer(exercise.engSeason, data.seasonAnswer)) {
            setError("seasonAnswer", {type: "wrongAnswer", message: 'Right answer: ' + exercise.engSeason[0]});
        } else {
            answers.push(1)
        }
        if (answers.length === 3) {
            setIsCompleted(true)
        }
        if (answers.length === 2 && !isSeason) {
            setIsCompleted(true)
        }
    })

    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', p: 4}}>
            <Typography sx={{fontSize: 30, fontWeight: 600, pb: 1}}>
                {exercise.question}
            </Typography>
            <form onSubmit={onSubmit}>
                <Box sx={{m: 1, height: 80}}>
                    <TextField focused={isCompleted} color='success' {...register("engAnswer", registerOptions)}
                               label='In English' variant='outlined' error={!!errors.engAnswer}
                               helperText={errors.engAnswer?.message || ''}/>
                </Box>
                <Box sx={{m: 1, height: 80}}>
                    <TextField focused={isCompleted} color='success' {...register("uaAnswer", registerOptions)}
                               label='In Ukrainian' variant='outlined' error={!!errors.uaAnswer}
                               helperText={errors.uaAnswer?.message || ''}/>
                </Box>
                {
                    isSeason
                    ? <Box sx={{m: 1, height: 80}}>
                        <TextField focused={isCompleted} color='success' {...register("seasonAnswer", registerOptions)}
                                   label='Season (eng)' variant='outlined' error={!!errors.seasonAnswer}
                                   helperText={errors.seasonAnswer?.message || ''}/>
                    </Box>
                    :null
                }

                <Box>
                    <Button variant='contained' type='submit'
                            sx={{color: 'white', bgcolor: 'black', m: 1}}>Check</Button>
                    <Button variant='contained' disabled={!isCompleted} onClick={nextStep}
                            sx={{color: 'white', bgcolor: '#225d22', m: 1}}>Next</Button>
                </Box>
            </form>
        </Box>
    );
};

export default MouthExercise;