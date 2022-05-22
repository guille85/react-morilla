//@ts-check
import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import cursos from '../mocks/cursosMock';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
const { categoryId } = useParams();
const [listaCursos, setListaCursos] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState("Loading...");

useEffect(() => {
const traerCursos = new Promise((result, reject) => {
setTimeout(() => {
  result(() => {
  if(categoryId){
    return cursos.filter(cur => cur.category === categoryId);
  }
  return cursos;
})
}, 2000);
});

traerCursos
  .then((res) => {
    setListaCursos(res);
    setLoading("");
    console.log(listaCursos);
  })
  .catch((error) => {
    setError(error);
    setLoading("");
  }
  )
  .finally(() => setLoading(""));
}, [categoryId]);

if(error){
  <h1>Ha ocurrido un error, intente nuevamente!!</h1>
}
  return (
      <>
        <p>{loading}</p>
        <Grid container direction="row" justifyContent="left" spacing={1} >
          { listaCursos && listaCursos.map((item, index) => 
            <ItemList key={index} curso={item}></ItemList>
          )}
        </Grid>        
      </>
  )
}
