import React, {useState} from 'react';
import ExerciseForm from "../../Common/ExerciseForm";
import {TextField} from "@mui/material";
import {HelpButton} from "../../Common/HelpButton";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";

interface props {
    step: number
    groupedQuestions: any[][]
    nextStep: () => void
}

const PsVerbEndingExercise: React.FC<props> = ({step, groupedQuestions, nextStep}) => {

    const registerOptions = {required: {value: true, message: 'field is required'}}
    const [completedQuestion, setCompletedQuestion] = useState(
        [false, false, false, false, false, false]
    )
    const [rightAnswers, setRightAnswers] = useState(0)
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: {errors}
    } = useForm()


    const showRightAnswer = (fieldName: string, rightAnswer: string, fieldIndex: number) => {
        setValue(fieldName, rightAnswer, {shouldValidate: true})
        setCompletedQuestion(prevState => {
            return prevState.map((value, index) => {
                if (index === fieldIndex) return true
                return value
            });
        })
    }

    const onSubmit = handleSubmit((data) => {
        setRightAnswers(0)
        for (let i = 0; i < 6; i++) {
            if (data[`question${i}`] === checkAnswer(groupedQuestions[step - 1][i])) {
                setRightAnswers(prevState => prevState+1)
            } else {
                setError(`question${i}`, {type: 'wrong', message: 'This is not right'},
                    {shouldFocus: true})
            }
        }
    })

    const checkAnswer = (answer: string) => {
        switch (answer.slice(-1)) {
            case 'z':
            case 's':
            case 'o':
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

    const handleNextStep = () => {
        for (let i = 0; i < 6; i++) {
            setValue(`question${i}`, '')
        }
    }

    return (
        <div>
            <ExerciseForm isCompleted={rightAnswers === 6} nextStep={handleNextStep} onSubmit={onSubmit}
                          question={'Write word with right ending for He/She/It in Present Simple'}
            >
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    {
                        groupedQuestions[step - 1]?.map((verb, index) =>
                            <Box key={verb} sx={{m: 1, height: 80, display: 'flex'}}>
                                <TextField autoComplete={'off'} focused={completedQuestion[index]} color='success'
                                           {...register(`question${index}`, registerOptions)}
                                           label={verb} variant='outlined' error={!!errors[`question${index}`]}
                                    // @ts-ignore
                                           helperText={errors[`question${index}`]?.message || ''}
                                />
                                <HelpButton showRightAnswer={
                                    () => showRightAnswer(`question${index}`, checkAnswer(verb), index)
                                }/>
                            </Box>)
                    }
                </Box>
            </ExerciseForm>
        </div>
    );
};

export default PsVerbEndingExercise;