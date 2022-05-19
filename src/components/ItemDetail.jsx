import React from 'react'
import { Card, CardActions, CardContent, Grid, Box } from '@mui/material';

export default function ItemDetail({curso}) {
  return (
    <>
      <Card elevation={3} sx={{ maxWidth: 500, borderRadius: "10px" }}>
        <CardContent>
        <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: "250px",
          height: "300px",
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
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
