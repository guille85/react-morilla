//@ts-check
import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer() {
const { categoryId } = useParams();
const [listaCursos, setListaCursos] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {

const db = getFirestore();
let cursos;

if(categoryId){
  cursos = query(
    collection(db, "products"),
    where("category", "==", categoryId)
  );
} else {
  cursos = collection(db, "products");
}

getDocs(cursos).then((items) => {
   setListaCursos(items.docs.map((doc) => ({id: doc.id, ...doc.data()})));
})
  .catch((error) => {
    setError(error);
    setLoading(false);
  }
  )
  .finally(() => setLoading(false));
}, [categoryId]);

if(error){
  <h1>Ha ocurrido un error, intente nuevamente!!</h1>
}
  return (
      <>
      { loading ? (
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
          { listaCursos && listaCursos.map((item, index) => 
            <ItemList key={index} curso={item}></ItemList>
          )}
        </Grid>
        )}
                
      </>
  )
}
