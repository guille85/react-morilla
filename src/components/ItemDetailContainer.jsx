import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

export default function ItemDetailContainer() {

let cursos = [
  { id: "1", title: "Java",   description: "Intermedio", price: "$10.000", pictureUrl:"https://i.imgur.com/WxUmkn5.jpg" },
  { id: "2", title: "Python", description: "Básico", price: "$8.000", pictureUrl:"https://oregoom.com/wp-content/uploads/2020/06/Basico-de-Python.jpg"},
  { id: "3", title: "PHP", description: "Básico", price: "$12.000", pictureUrl:"https://dc722jrlp2zu8.cloudfront.net/media/cache/51/86/5186e22a3ab7182a5a8324999ba7c4cd.webp"},
  {id: "4", title: "React", description: "Básico", price: "$15.000", pictureUrl:"https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2022/02/thumbnail-2.png"}
];
const [detailCurso, setDetailCurso] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState("Loading...");

useEffect(() => {
const traerDetailCurso = new Promise((result, reject) => {
setTimeout(() => {
  result(cursos.find(item => item.id === "3"));
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
}, []);

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
