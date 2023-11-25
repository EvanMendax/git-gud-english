import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {exercise} from "./MonthTrainer";
import {useForm} from "react-hook-form";
import {HelpButton} from "../../Common/HelpButton";
import ExerciseForm from "../../Common/ExerciseForm";

interface props {
    exercise: exercise
    step: number
    setCurrentStep: (step: number) => void
    isSeason: boolean
}

type fieldName = {
    engAnswer: string
    uaAnswer: string
    seasonAnswer: string
}

const MouthExercise: React.FC<props> = ({exercise, step, setCurrentStep, isSeason}) => {

    const registerOptions = {required: {value: true, message: 'field is required'}}
    const {
        reset,
        register,
        handleSubmit,
        setError,
        setValue,
        formState: {errors}
    } = useForm<fieldName>();
    const [isCompleted, setIsCompleted] = useState(false)
    const [completedQuestion, setCompletedQuestion] = useState(
        [false, false, false]
    )
    const nextStep = () => {
        setCurrentStep(step + 1)
        setIsCompleted(false)
        setCompletedQuestion([false, false, false])
        reset()
    }
    const checkAnswer = (answers: string[], supposition: string): string | undefined => {
        return answers.find(answer => answer.toLowerCase() === supposition.toLowerCase())
    }

    const onSubmit = handleSubmit((data) => {
        const answers = []
        if (!checkAnswer(exercise.engAnswer, data.engAnswer)) {
            setError("engAnswer", {type: "wrongAnswer", message: 'Right answer: ' + exercise.engAnswer[0]});
        } else answers.push(1)
        if (!checkAnswer(exercise.uaAnswer, data.uaAnswer)) {
            setError("uaAnswer", {type: "wrongAnswer", message: 'Right answer: ' + exercise.uaAnswer[0]});
        } else answers.push(1)
        if (!checkAnswer(exercise.engSeason, data.seasonAnswer)) {
            setError("seasonAnswer", {
                type: "wrongAnswer", message: 'Right answer: ' + exercise.engSeason[0]
            });
        } else answers.push(1)
        if (answers.length === 3 || (answers.length === 2 && !isSeason)) {
            setCompletedQuestion([true, true, true])
            setIsCompleted(true)
        }
    })

    return (
        <ExerciseForm question={exercise.question} onSubmit={onSubmit} nextStep={nextStep} isCompleted={isCompleted}>
            <Box sx={{m: 1, height: 80, display: 'flex'}}>
                <TextField autoComplete={'off'} focused={completedQuestion[0]}
                           color='success' {...register("engAnswer", registerOptions)}
                           label='In English' variant='outlined' error={!!errors.engAnswer}
                           helperText={errors.engAnswer?.message || ''}/>
                <HelpButton rightAnswer={exercise.engAnswer[0]} fieldName={'engAnswer'} fieldIndex={0}
                            setCompletedQuestion={setCompletedQuestion} setValue={setValue}/>
            </Box>
            <Box sx={{m: 1, height: 80, display: 'flex'}}>
                <TextField autoComplete={'off'} focused={completedQuestion[1]} color='success'
                           {...register("uaAnswer", registerOptions)}
                           label='In Ukrainian' variant='outlined' error={!!errors.uaAnswer}
                           helperText={errors.uaAnswer?.message || ''}
                />
                <HelpButton rightAnswer={exercise.uaAnswer[0]} fieldName={'uaAnswer'} fieldIndex={1}
                            setCompletedQuestion={setCompletedQuestion} setValue={setValue}/>
            </Box>
            {isSeason
                ? <Box sx={{m: 1, height: 80, display: 'flex'}}>
                    <TextField autoComplete={'off'} focused={completedQuestion[2]}
                               color='success' {...register("seasonAnswer", registerOptions)}
                               label='Season (eng)' variant='outlined' error={!!errors.seasonAnswer}
                               helperText={errors.seasonAnswer?.message || ''}/>
                    <HelpButton rightAnswer={exercise.engSeason[0]} fieldName={'seasonAnswer'} fieldIndex={2}
                                setCompletedQuestion={setCompletedQuestion} setValue={setValue}/>
                </Box>
                : null}
        </ExerciseForm>
    );
};
export default MouthExercise;