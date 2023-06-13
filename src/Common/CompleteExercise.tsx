import React from 'react'
import completeSVG from '../Common/Images/completeIcon.svg'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {routes} from "../routes";
import {useLocation} from "react-router-dom";

interface props {
    setCurrentStep: (step: number) => void
}

const CompleteExercise:React.FC<props> = ({setCurrentStep}) => {

    const location = useLocation()

    const changeExercise = ():string => {
        const currentPath = location.pathname.slice(1)
        const randomExercise = Math.floor(Math.random() * (routes.length))
        if (currentPath === routes[randomExercise].path) {
            return changeExercise()
        }
        return routes[randomExercise].path
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
            <img style={{width: 300}} src={completeSVG} alt="completeIcon"/>
            <Typography sx={{color: '#016522', fontSize: 20}}>Exercise completed, you are amazing!!!</Typography>
            <Typography sx={{color: '#016522', fontSize: 20}}>Try another exercise or restart this.</Typography>
            <Box sx={{pt: 3, mb: 3}}>
                <Button color='success' variant='contained' onClick={()=>console.log(changeExercise())} sx={{mr: 2}}>
                    random exercise
                </Button>
                <Button color='success' variant='contained' onClick={() => setCurrentStep(1)}>
                    restart this
                </Button>
            </Box>
        </Box>
    );
};

export default CompleteExercise;