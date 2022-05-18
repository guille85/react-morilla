import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

export default function ItemListContainer({ greeting }) {

let cursos = [
  { id: "1", title: "Java",   description: "Intermedio", price: "$10.000", pictureUrl:"../assets/java" },
  { id: "2", title: "Python", description: "Básico", price: "$8.000", pictureUrl:""},
  { id: "3", title: "PHP", description: "Básico", price: "$12.000", pictureUrl:""},
  {id: "4", title: "React", description: "Básico", price: "$15.000", pictureUrl:""}
];
const [listaCursos, setListaCursos] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState("Loading...");

useEffect(() => {
const traerCursos = new Promise((result, reject) => {
setTimeout(() => {
  result(cursos);
}, 2000);
});
//console.log(traerCursos);

traerCursos
  .then((res) => {
    setListaCursos(res);
  })
  .catch((error) => {
    setError(error);
  }
  )
  .finally(() => setLoading(""));
}, []);

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
