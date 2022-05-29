//@ts-check
import { Button, ButtonGroup, Grid, Box } from '@mui/material';
import React, {useState} from 'react';

export default function ItemCount({stock, initial, onAdd}) {

    const [quantity, setQuantity] = useState(initial);

    const sumar =()=>{
      if(quantity<=stock){
        setQuantity(quantity+1);
      }
    }

    const restar=()=>{
      if(quantity>0){
        setQuantity(quantity-1);
      }
    }

  return (
    <Box>
      <Grid container spacing={2} direction="column" justifyContent="center">
        <Grid item xl={12}>
          <ButtonGroup>
            <Button
              variant="contained"
              disabled={quantity === 0}
              onClick={() => restar()}
            >
              -
            </Button>
            <Button variant="text">{quantity}</Button>
            <Button
              variant="contained"
              disabled={quantity === stock}
              onClick={() => sumar()}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xl={12}>
          <Button
            variant="contained"
            disabled={quantity === 0}
            onClick={() => onAdd(quantity)}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
