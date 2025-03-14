import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Mi Aplicación
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;