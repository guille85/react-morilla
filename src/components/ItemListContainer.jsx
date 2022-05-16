import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({ greeting }) {

const onAdd=(cantidad)=>{
  alert("Elementos agregados: " + cantidad);
}

  return (
      <>
        <h1>{ greeting } </h1>
        <ItemCount stock={12} initial={1} onAdd={onAdd}/>
      </>
  )
}
