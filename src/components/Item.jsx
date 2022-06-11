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
      <Card elevation={3} sx={{ maxWidth: 280, borderRadius: "10px", margin: '7px' }}>
        <CardContent>
        <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '250px',
              height: '150px',
              overflow: 'hidden',
              borderRadius: '5px'
            }}
        >
        <img src={curso.pictureUrl} alt={curso.title} style={{width: '100%', height: 'auto', objectFit: 'cover' }} />
      </Box>
        </CardContent>
        <CardActions>
          <Grid container spacing={2} direction="row" justifyContent="center" >
            <Grid item xl={12}>
              <div><b>Curso:</b> {curso.title}</div>
              <div><b>Nivel:</b> {curso.category}</div>
              <div><b>Precio:</b> ${curso.price}</div>
              <div><b>Stock: </b>{curso.stock}</div>
              <Button component={Link} to={filtro} variant="contained" color='primary' sx={{marginTop: "5px"}} fullWidth>
                Ver mas...
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
