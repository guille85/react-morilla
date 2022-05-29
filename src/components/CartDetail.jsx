import React, {useContext} from 'react'
import {Button} from '@mui/material';
import { CartContext } from '../context/cart/CartContext';

export default function CartDetail() {

const {cart, clearCart} = useContext(CartContext);

  return (

    <div>
    { cart.length > 0 ? 
    (cart.map(item => <p>{item.id} - {item.title} - {item.quantity}</p>)) : 'El carro está vacío!' }
    {cart.length > 0 ? 
    <Button
      variant="contained"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "6px 16px",
      }}
      onClick={clearCart}
    >
      Vaciar carrito
    </Button> : ""}
    </div>
  );
}
