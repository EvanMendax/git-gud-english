import PresentSimple from "./Exercises/PresentSimple/PresentSimple";
import MonthTrainer from "./Exercises/MonthTrainer/MonthTrainer";
import React from "react";

export const routes = [
    {
        path: "presentSimple",
        element: <PresentSimple/>,
    },
    {
        path: "monthTrainer",
        element: <MonthTrainer/>,
    }
]