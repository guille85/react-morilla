import React, {useContext} from 'react';
import { Box, Button, Grid } from "@mui/material";
import CartDetailTable from './components/CartDetailTable';
import { CartContext } from './context/cart/CartContext';
import {Link} from 'react-router-dom';

export default function Cart() {

    const { cart, totalInCart, clearCart, totalPriceCart } = useContext(CartContext);

  return (
    <Box
      container
      sx={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {
        Boolean(cart.length) ? (

          <CartDetailTable cart={cart} totalInCart={totalInCart()} clearCart={clearCart} totalPriceCart={totalPriceCart()}/>

        ) : (
          <Box container
               sx={{
                 marginTop: '40px',
                 display: 'flex',
                 justifyContent: 'center',
                 gap: 2,
               }}>
            <Grid>
                <p>Aún no hay productos en tu carro!!</p>
                <Button component={Link} to="/" variant="contained" style={{ marginRight: 10 }}>Volver a página principal...</Button>
            </Grid>
          </Box>
        )
      }
    </Box>
  )
}
