import React, {useEffect, useState} from 'react';
import SideMenu from "../../Common/SideMenu";
import ExerciseWrapper from "../../Common/ExerciseWrapper";
import CompleteExercise from "../../Common/CompleteExercise";
import PsVerbEndingExercise from "./PSVerbEndingExercise";
import {groupQuestion, shuffleQuestion} from "../../Common/commonFunctions";
import {verbs} from "../../dataArrays";

const PSVerbEnding = () => {

    const [currentStep, setCurrentStep] = useState<number>(1)
    const [groupedQuestions, setGroupedQuestions] = useState<any[][]>([])
    const restart = () => {
        setCurrentStep(1)
        setGroupedQuestions(groupQuestion(shuffleQuestion(verbs), 6))
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    useEffect(() => {
        setGroupedQuestions(groupQuestion(shuffleQuestion(verbs), 6))
    }, []);

    return (
        <ExerciseWrapper>
            <SideMenu steps={groupedQuestions.length} currentStep={currentStep} restart={restart}/>
            {
                currentStep < groupedQuestions.length + 1
                    ? <PsVerbEndingExercise step={currentStep} groupedQuestions={groupedQuestions} nextStep={nextStep}/>
                    : <CompleteExercise setCurrentStep={setCurrentStep}/>
            }
        </ExerciseWrapper>
    );
};

export default PSVerbEnding;