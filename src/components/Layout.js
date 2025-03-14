import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar/>
            <Container className="container">
                {children}
            </Container>

            <Box className="footer">
                <Typography>
                Todos los derechos reservados, Linares Ana marzo de 2025
                </Typography>
            </Box>
        </Box>
    )
};

export default Layout;
