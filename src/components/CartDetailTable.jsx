import React from 'react'
import CartDetailRow from './CartDetailRow';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function CartDetailTable({ cart, totalInCart, clearCart, totalPriceCart }) {

  return (
    <Box
    sx={{
      width: '100%',
      backgroundColor: grey[300],
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0.5,
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Typography variant='h5' component='h2' sx={{ marginBottom: '10px' }}>Detalle de tu compra</Typography>

    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cantidad</TableCell>
            <TableCell>Producto</TableCell>
            <TableCell>Precio unitario</TableCell>
            <TableCell>Precio Total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cart.map( item => (
              <CartDetailRow key={item.id} item={item} />
            ))
          }
          <TableRow>
            <TableCell>
              <Typography variant='body1'>
                Importe total: $
                { totalPriceCart }
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container spacing={2} direction="row" justifyContent="center" style={{ marginTop:"10px"}}>
    <Button component={Link} to="/checkout" variant="contained" style={{ marginRight: 10 }}>Finalizar compra</Button> 
    <Button variant="contained" onClick={clearCart}>Vaciar carrito</Button>
    </Grid>
  </Box>
  )
}
