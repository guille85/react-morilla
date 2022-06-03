//@ts-check
import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import {Grid, Box, CircularProgress} from '@mui/material';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
const { detailId } = useParams();
const [detailCurso, setDetailCurso] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {

const db = getFirestore();
const curso = doc(db, "products", detailId);
getDoc(curso).then((item) =>{
  if(item){
    setDetailCurso({ id: item.id, ...item.data() });
  } else {
    return <p>Producto no encontrado!!</p>
  }
  
})
  .catch((error) => {
    setError(error);
    setLoading(false);
  }
  )
  .finally(() => setLoading(false));
}, [detailId]);

if(error){
  <h1>Ha ocurrido un error, intente nuevamente!!</h1>
}
  return (
      <>
      {loading ? (
          <Box
            sx={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress
              variant="indeterminate"
              size={40}
              thickness={4}
              value={100}
            />
          </Box>
        ) : (
          <Grid container direction="row" justifyContent="left" spacing={1} >
          { 
            <ItemDetail curso={detailCurso}></ItemDetail>
          }
        </Grid> 
        ) }
      </>
  )
}
