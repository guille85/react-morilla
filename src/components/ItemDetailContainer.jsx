//@ts-check
import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import cursos from '../mocks/cursosMock';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
const { detailId } = useParams();
const [detailCurso, setDetailCurso] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState("Loading...");

useEffect(() => {
const traerDetailCurso = new Promise((result, reject) => {
setTimeout(() => {
  result(cursos.find(item => item.id === detailId));
}, 2000);
});

traerDetailCurso
  .then((res) => {
    setDetailCurso(res);
  })
  .catch((error) => {
    setError(error);
  }
  )
  .finally(() => setLoading(""));
}, [detailId]);

if(error){
  <h1>Ha ocurrido un error, intente nuevamente!!</h1>
}
  return (
      <>
        <p>{loading}</p>
        { !loading && <Grid container direction="row" justifyContent="left" spacing={1} >
          { 
            <ItemDetail curso={detailCurso}></ItemDetail>
          }
        </Grid> }       
      </>
  )
}
