//@ts-check
import React from 'react'
import { Box, Typography } from '@mui/material';
import ItemCount from './ItemCount';
import { grey } from '@mui/material/colors';

const onAdd=(cantidad)=>{
  alert("Elementos agregados: " + cantidad);
}

export default function ItemDetail({curso}) {
  return (
    <>
      <Box 
      sx={{
        width: '100%',
        backgroundColor: grey[100],
        borderRadius: '20px',
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
          borderRadius: '20px' 
        }}
      >
        <img src={curso.pictureUrl} alt={curso.title} sx={{flexShrink: 1, minWidth: '100%', minHeight: 'auto', objectFit: 'cover' }} />
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
        <Typography variant='h4'>{ curso.price }</Typography>

        <ItemCount stock={curso.stock} initial={1} onAdd={onAdd} />

      </Box>
    </Box>
    </>
  );
}
