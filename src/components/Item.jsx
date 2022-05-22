//@ts-check
import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({curso}) {

  const[filtro, setFiltro] = useState("");

  useEffect(()=>{
    setFiltro("/detail/" + curso.id);
  }, [curso.id]);

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
              <Button component={Link} to={filtro} variant="contained" color='primary'>
                Ver mas...
              </Button>
              
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
