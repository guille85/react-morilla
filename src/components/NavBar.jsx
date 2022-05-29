//@ts-check
import React, { useContext} from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';
import { Box } from "@mui/system";
import { CartContext } from '../context/cart/CartContext';

let menuOptions= [
  {
    indice: "basico",
    titulo: "Basico"
  },
  {
    indice: "intermedio", 
    titulo: "Intermedio"
  },
  { indice: "avanzado",
    titulo: "Avanzado"
  },
];

export const NavBar = () => {

  const { cart } = useContext(CartContext);

    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box>
              <Typography
                variant="h4"
                noWrap
                href="/"
                component="a"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                E-Dev Books
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            {
              menuOptions.map( ({ indice, titulo }) => (
                  <NavLink
                    to={ `category/${indice}` }
                    key={ titulo }
                    className='nav-link'
                  >
                    { titulo }
                  </NavLink> 
              ))
            }
          </Box>
            <CartWidget qtyItems={ cart.length } justify-xs-flex-end />
          </Toolbar>
        </Container>
      </AppBar>
    );
}
