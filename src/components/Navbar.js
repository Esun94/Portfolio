import React from "react";
import { AppBar,Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@mui/material';

import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@mui/icons-material'

function Navbar() {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <ArrowBack />
                </Toolbar>
            </AppBar>

        </Box>
    )
    
}

export default Navbar;