import React, {useState} from 'react';
import ExerciseForm from "../../Common/ExerciseForm";
import {Paper, TextField} from "@mui/material";
import {HelpButton} from "../../Common/HelpButton";
import Box from "@mui/material/Box";
import {fieldNames} from "../MonthTrainer/MouthExercise";
import {useForm} from "react-hook-form";

interface props {
    step: number
    groupedQuestions: any[][]
}

const PsVerbEndingExercise: React.FC<props> = ({step, groupedQuestions}) => {

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
        switch (answer.slice(-1)) {
            case 'z':
            case 's':
            case 'x':
                return answer + 'es'
            case 'y':
                const consonantLetters = ['a', 'e', 'i', 'o', 'u', 'y']
                if (consonantLetters.find(letter => letter === answer.slice(-2, -1))) {
                    return answer + 's'
                } else {
                    return answer.slice(0, -1) + 'ies'
                }
            default:
                break
        }
        switch (answer.slice(-2)) {
            case 'ch':
            case 'sh':
                return answer + 'es'
            default:
                break
        }
        return answer + 's'
    }


    return (
        <div>
            <ExerciseForm isCompleted={false} nextStep={() => console.log('')} onSubmit={onSubmit}
                          question={'Write word with right ending for He/She/It in Present Simple'}
            >
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    {
                        groupedQuestions[step - 1]?.map((verb, index) =>
                            <Box key={verb} sx={{m: 1, height: 80, display: 'flex'}}>
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
                </Box>
            </ExerciseForm>
        </div>
    );
};

export default PsVerbEndingExercise;