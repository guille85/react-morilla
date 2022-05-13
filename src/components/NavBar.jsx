import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import CartWidget from "./CartWidget";

export const NavBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
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
                        <IconButton>Home</IconButton>
                    </Typography>
                    <Typography variant="h6">
                        <IconButton>Mis cursos</IconButton>
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
                    <CartWidget qtyItems={5} justify-xs-flex-end/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
