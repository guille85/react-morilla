import React from 'react'
import ItemCount from './ItemCount';
import { Card, CardActions, CardContent, Grid } from '@mui/material';

export default function Item({curso}) {

  const onAdd=(cantidad)=>{
    alert("Elementos agregados: " + cantidad);
  }

  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 250, borderRadius: "10px" }}>
        <CardContent>
          
        </CardContent>
        <CardActions>
          <Grid container spacing={2} direction="row" justifyContent="center" >
            <Grid item xl={12}>
              <div>Curso {curso.title}</div>
              <div>Nivel: {curso.description}</div>
              <div>Precio: {curso.price}</div>
              {/*<img src={curso.pictureUrl}></img>*/}
            </Grid>
            <Grid item xl={12}>
              <ItemCount stock={12} initial={1} onAdd={onAdd} />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
