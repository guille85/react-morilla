import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

export const NavBar = () => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        E-Codders
                    </Typography>
                    <Typography variant="h6">
                        <IconButton>Cursos</IconButton>
                    </Typography>
                    <Typography variant="h6">
                        <IconButton>Favoritos</IconButton>
                    </Typography>
                    <Typography variant="h6">
                        <IconButton>Profesores</IconButton>
                    </Typography>
                    <Typography variant="h6">
                        <IconButton>Nosotros</IconButton>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
