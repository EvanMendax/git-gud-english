import PresentSimple from "./Exercises/PresentSimple/PresentSimple";
import MonthTrainer from "./Exercises/MonthTrainer/MonthTrainer";
import React from "react";

export const routes = [
    {
        path: "/monthTrainer",
        element: <MonthTrainer/>,
    },
    {
        path: "/presentSimple",
        element: <PresentSimple/>,
    },
]