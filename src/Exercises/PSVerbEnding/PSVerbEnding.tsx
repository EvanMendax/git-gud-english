import React, {useState} from 'react';
import SideMenu from "../../Common/SideMenu";
import PsVerbEndingSetting from "./PSVerbEndingSetting";
import Box from "@mui/material/Box";
import ExerciseWrapper from "../../Common/ExerciseWrapper";
import CompleteExercise from "../../Common/CompleteExercise";
import PsVerbEndingExercise from "./PSVerbEndingExercise";

const PSVerbEnding = () => {

    const [currentStep, setCurrentStep] = useState<number>(1)
    const restart = () => setCurrentStep(1)

    return (
        <ExerciseWrapper>
            <SideMenu steps={10} currentStep={currentStep} restart={restart}>
                <PsVerbEndingSetting/>
            </SideMenu>
            {
                currentStep < 10
                    ?  <PsVerbEndingExercise/>
                    : <CompleteExercise setCurrentStep={setCurrentStep}/>
            }
        </ExerciseWrapper>
    );
};

export default PSVerbEnding;