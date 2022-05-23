//@ts-check
import { Button, ButtonGroup, Grid, Box, Typography } from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount({stock, initial, onAdd, prodCart}) {

    const [cantidad, setCantidad] = useState(initial);

    const sumar =()=>{
      if(cantidad<=stock){
        setCantidad(cantidad+1);
      }
    }

    const restar=()=>{
      if(cantidad>0){
        setCantidad(cantidad-1);
      }
    }

  return (
    <Box>
      {prodCart ? (
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
        </>
      ) : (
        <Grid container spacing={2} direction="column" justifyContent="center">
          <Grid item xl={12}>
            <ButtonGroup>
              <Button
                variant="contained"
                disabled={cantidad === 0}
                onClick={() => restar()}
              >
                -
              </Button>
              <Button variant="text">{cantidad}</Button>
              <Button
                variant="contained"
                disabled={cantidad === stock}
                onClick={() => sumar()}
              >
                +
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xl={12}>
            <Button
              disabled={cantidad === 0}
              variant="outlined"
              onClick={() => onAdd(cantidad)}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
