import React, {useEffect, useState} from 'react';
import SideMenu from "../../Common/SideMenu";
import PsVerbEndingSetting from "./PSVerbEndingSetting";
import Box from "@mui/material/Box";
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

    useEffect(() => {
        setGroupedQuestions(groupQuestion(shuffleQuestion(verbs), 6 ))
    }, []);

    return (
        <ExerciseWrapper>
            <SideMenu steps={10} currentStep={currentStep} restart={restart}>
                <PsVerbEndingSetting/>
            </SideMenu>
            {
                currentStep < 10
                    ?  <PsVerbEndingExercise step={currentStep} groupedQuestions={groupedQuestions}/>
                    : <CompleteExercise setCurrentStep={setCurrentStep}/>
            }
        </ExerciseWrapper>
    );
};

export default PSVerbEnding;