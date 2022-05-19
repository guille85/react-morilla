import React from 'react'
import ItemCount from './ItemCount';
import { Card, CardActions, CardContent, Box, Grid } from '@mui/material';

export default function Item({curso}) {

  const onAdd=(cantidad)=>{
    alert("Elementos agregados: " + cantidad);
  }

  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 280, borderRadius: "10px" }}>
        <CardContent>
        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '250px',
          height: '150px',
          overflow: 'hidden',
          borderRadius: '20px' 
        }}
      >
        <img src={curso.pictureUrl} alt={curso.title} sx={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
      </Box>
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
