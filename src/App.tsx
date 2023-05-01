import React from 'react';
import SideNavigation from "./Surface/SideNavigation";
import ContentContainer from "./Surface/ContentContainer";
import HeaderNavigation from "./Surface/HeaderNavigation";
import Box from "@mui/material/Box";

function App() {
    return (
        <div>
            <HeaderNavigation/>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr', mt: '20px', mr: '6%', ml: '6%'}}>
                <SideNavigation/>
                <ContentContainer/>
            </Box>

        </div>
    );
}

export default App;
