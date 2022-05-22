import { Button, ButtonGroup, Grid } from '@mui/material';
import React, {useState} from 'react';

export default function ItemCount({stock, initial, onAdd}) {

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
    <Grid container spacing={2} direction="column" justifyContent="center">
      <Grid item xl={12}>
        <ButtonGroup>
          <Button variant="contained"
                  disabled={cantidad === 0}
                  onClick={() => restar()}
          >-</Button>
          <Button variant="text">{cantidad}</Button>
          <Button variant="contained"
                  disabled={cantidad === stock}
                  onClick={() => sumar()}
          >+</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xl={12}>
        <Button disabled={cantidad === 0}
                variant="outlined"
                onClick={() => onAdd(cantidad)}
        >Agregar</Button>
      </Grid>
    </Grid>
  );
}
