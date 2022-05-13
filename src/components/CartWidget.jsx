import React from 'react';
import { Badge } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget( {qtyItems}) {
    return (
      <>
        <Badge
          badgeContent={qtyItems}
          color="action"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
            <ShoppingCartIcon/>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}></Box> 
        </Badge>
      </>
    );
}




