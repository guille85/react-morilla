import React, {useContext, useState} from 'react'
import { CartContext } from '../context/cart/CartContext';
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function CartDetailRow({item}) {

const {removeItem, totalPriceCart} = useContext(CartContext);
const { id, title, quantity, price } = item;

  return (

    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        {quantity}
      </TableCell>
      <TableCell>
        {title}
      </TableCell>
      <TableCell>$ {price}</TableCell>
      <TableCell>$ {quantity * price}</TableCell>
      <TableCell>
         <IconButton aria-label="delete" color="primary"  onClick={() => removeItem(id)}>
            <DeleteIcon />
         </IconButton>
      </TableCell>
    </TableRow>
  );
}
