import PSVerbEnding from "./Exercises/PSVerbEnding/PSVerbEnding";
import MonthTrainer from "./Exercises/MonthTrainer/MonthTrainer";
import React from "react";
import PsSentences from "./Exercises/PSSentences/PSSentences";

export const routes = [
    {
        path: "/presentSimpleVerb",
        element: <PSVerbEnding/>,
    },
    {
        path: "/presentSimpleSentences",
        element: <PsSentences/>,
    },
    {
        path: "/monthTrainer",
        element: <MonthTrainer/>,
    },

]