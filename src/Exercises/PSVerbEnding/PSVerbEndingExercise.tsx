import React, {useEffect, useState} from 'react';
import ExerciseForm from "../../Common/ExerciseForm";
import {TextField} from "@mui/material";
import {HelpButton} from "../../Common/HelpButton";
import Box from "@mui/material/Box";
import {verbs} from "../../dataArrays";
import {fieldNames} from "../MonthTrainer/MouthExercise";
import {useForm} from "react-hook-form";
import {shuffleQuestion} from "../../Common/commonFunctions";

interface props {
    step: number
    groupedQuestions: any[][]
}

const PsVerbEndingExercise:React.FC<props> = ({step, groupedQuestions}) => {

    const registerOptions = {required: {value: true, message: 'field is required'}}
    const [completedQuestion, setCompletedQuestion] = useState(
        [false, false, false]
    )
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: {errors}
    } = useForm();

    const showRightAnswer = (fieldName: fieldNames, rightAnswer: string, fieldIndex: number) => {
        setValue(fieldName, rightAnswer)
        setCompletedQuestion(prevState => {
            return prevState.map((value, index) => {
                if (index === fieldIndex) return true
                return value
            });
        })
    }

    const onSubmit = handleSubmit((data) => {

    })

    const checkAnswer = (answer: string) => {

    }


    return (
        <div>
            <ExerciseForm isCompleted={false} nextStep={() => console.log('')} onSubmit={onSubmit}
                          question={'Write word with right ending for He/She/It in Present Simple'}
            >
                {
                    groupedQuestions[step-1]?.map((verb, index) =>
                        <Box sx={{m: 1, height: 80, display: 'flex'}}>
                            <TextField autoComplete={'off'} focused={completedQuestion[index]} color='success'
                                       {...register(verb, registerOptions)}
                                       label={verb} variant='outlined' error={!!errors.uaAnswer}
                                // @ts-ignore
                                       helperText={errors[verb]?.message || ''}
                            />
                            <HelpButton showRightAnswer={
                                () => showRightAnswer('uaAnswer', 'результат роботи майбутньої функції', 1)
                            }/>
                        </Box>)
                }
            </ExerciseForm>
        </div>
    );
};

export default PsVerbEndingExercise;