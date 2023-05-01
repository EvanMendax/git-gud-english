import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import PresentSimple from "./Exercises/PresentSimple/PresentSimple";
import MonthTrainer from "./Exercises/MonthTrainer/MonthTrainer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "presentSimple",
                element: <PresentSimple/>,
            },
            {
                path: "monthTrainer",
                element: <MonthTrainer/>,
            }
        ]
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
