import React from 'react'
import Item from './Item'
import { Grid } from '@mui/material';

export default function ItemList({curso}) {
  return (
    <>
      <Grid item xl={4} >
        <Item curso={curso}/>
      </Grid>
    </>
  );
}
