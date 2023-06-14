import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {routes} from "../routes";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}

const SideNavigation = () => {

    const [isCommonOpen, setIsCommonOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const navigate = useNavigate()
    const location = useLocation()

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number,) => {
        setSelectedIndex(index);
        navigate(routes[index].path)
    };

    useEffect(() => {
        const index = routes.findIndex((route) => location.pathname.slice(1) === route.path)
        setSelectedIndex(index)
        if (index === 0)
            setIsCommonOpen(true)
    }, [location])

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Paper elevation={14}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} component="nav">
                    <ListItemButton onClick={() => setIsCommonOpen(!isCommonOpen)}>
                        <ListItemText primary="Common"/>
                        {isCommonOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={isCommonOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{pl: 4}}
                                            selected={selectedIndex === 0}
                                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                                <Typography sx={linkStyle}>Month trainer</Typography>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText>
                            <Typography sx={linkStyle}>Present Simple</Typography>
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Paper>
        </Box>
    );
};

export default SideNavigation;