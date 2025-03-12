import React from 'react';
import { Box, Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Box>
            <Container className="container">
                {children}
            </Container>

            <Box className="footer">
                Todos los derechos reservados, Linares Ana marzo de 2025
            </Box>
        </Box>
    )
};

export default Layout;
