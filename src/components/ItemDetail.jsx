//@ts-check
import React, { useContext, useState } from 'react'
import {Box, Typography, Button} from '@mui/material';
import ItemCount from './ItemCount';
import { grey } from '@mui/material/colors';
import { CartContext } from '../context/cart/CartContext';
import {Link} from 'react-router-dom';

export default function ItemDetail({curso}) {

  const { id, stock } = curso;

  const [prodInCart, setProdInCart] = useState(false); // indica si un producto está o no en el carro

  const {addItem, removeItem} = useContext(CartContext);

  //aca tendria que controlar el stock antes de agregar al carro
  const onAdd = (count) => {
    if (count > 0) {
      addItem({...curso, quantity:count});
      setProdInCart(true);
    } else {
      alert('La cantidad no puede ser 0!');
    }
  };

  const removeOfCart = () => {
       removeItem(id);
       setProdInCart(false);
  }

  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: grey[300],
        padding: '20px',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '500px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {xs: '100%', md:'50%'},
          height: {xs: '280px', sm: '420px', md: 'auto'},
          overflow: 'hidden',
          borderRadius: '10px' 
        }}
      >
        <img src={curso.pictureUrl} alt={curso.title} style={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: {xs: '100%', md: '50%'},
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: {xs: 'auto', md: '400px'},
          margin: 'auto'
        }}
      >

        <Typography variant='h4'>{ curso.title }</Typography>
        <Typography variant='body1'>{ curso.description }</Typography>
        <Typography variant='h4'>${ curso.price }</Typography>
        { !prodInCart ?
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          :
            <>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                ¡Producto agregado al carrito!
              </Typography>
              <Button
                component={Link}
                to="/cart"
                variant="contained"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "6px 16px",
                }}
              >
                Ir al carrito
              </Button>
              <Button variant="contained"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '6px 16px'
                  }}
                  onClick={removeOfCart}
              >
              Eliminar del carrito
              </Button>
            </>
          }
      </Box>
    </Box>
  )
}
