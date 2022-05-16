import { Button, ButtonGroup, Card, CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';

export default function ItemCount(stock, initial, onAdd) {

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
      <Card elevation={3} sx={{maxWidth:300, borderRadius:"10px"}}>
        <CardContent>
          <h6>Curso JavaScript</h6>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button variant="contained" disabled={cantidad === 0} onClick={() => restar()}>-</Button>
            <Button variant="contained" disabled={cantidad === stock} onClick={() => sumar()}>+</Button>
          </ButtonGroup>
          <Button disabled={cantidad === 0} variant="outlined" onClick={() => onAdd(cantidad)}>Agregar</Button>
        </CardActions>
      </Card>
  );
}
