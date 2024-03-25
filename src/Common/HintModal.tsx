import React, {ReactElement} from 'react';
import {Modal, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface props {
    isHintOpen: boolean
    closeHint: () => void
    children: ReactElement
}

const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 6,
};

export const HintModal:React.FC<props> = ({isHintOpen, closeHint, children}) => {
    return (
        <Modal
            open={isHintOpen}
            onClose={closeHint}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper sx={style} >
                {children}
                <Button onClick={closeHint} sx={{margin: 'auto', display: 'block', pl: 5, pr: 5, mt: 4}} variant={'contained'}>Back</Button>
            </Paper>
        </Modal>
    )
}

