import React, {useState, useContext} from 'react';
import { Box, TextField, Button, Typography, Grid} from "@mui/material";
import { CartContext } from '../context/cart/CartContext';
import { grey } from "@mui/material/colors";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom';

export default function Checkout() {

  const [orderId, setOrderId] = useState('');

  const { cart, totalPriceCart, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = 0;
    total = totalPriceCart();

    const order = {
      buyer,
      cart,
      total
    }

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => { 
    setOrderId(id);
    clearForm();
    clearCart();
      })
  }

  const clearForm = () => {
    setBuyer({ name: "", email: "" , phone: ""});
  }

  return (
    <>
    <Grid container direction="row" justifyContent="center" style={{ marginTop:"15px"}}>
      <Box
        sx={{
          width: "30%",
          backgroundColor: grey[300],
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          alignItems: "center",
          textAlign: "center",
          marginRight: "10px",
          borderRadius: '10px'
        }}
      >
        <Typography variant="h5" component="h2" sx={{ marginBottom: "10px" }}>
          Ingresa tus datos por favor!
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "20px" }}
            required
            id="outlined-required"
            label="Nombre"
            onChange={handleChange}
            value={buyer.name}
            name="name"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "20px" }}
            required
            id="outlined-required"
            label="Email"
            onChange={handleChange}
            value={buyer.email}
            name="email"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
            required
            id="outlined-required"
            label="Telefono"
            onChange={handleChange}
            value={buyer.phone}
            name="phone"
          />
          <Button
            color="primary"
            sx={{
              display: "flex",
              margin: "auto",
              mt: 4,
              mb: 4,
              fontSize: 16,
              alignItems: "justify-end",
            }}
            type="submit"
            variant="contained"
          >
            Finalizar compra
          </Button>
        </form>
      </Box>
      <Box sx={{
          width: "50%",
          backgroundColor: grey[300],
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          alignItems: "center",
          textAlign: "center",
          marginRight: "10px",
          borderRadius: '10px'
        }}>
        {
          !orderId ? ( 
          <Box>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "10px" }}>
              Ya casi terminamos...
            </Typography>
          </Box> ) :
          (
          <Box>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "10px" }}>
              Tu orden se ha generado correctamente
            </Typography>
            <Typography variant="h4" component="h2" sx={{ marginBottom: "10px" }}>
              Código: {orderId}
            </Typography>
            <Button  component={Link} to="/" variant="contained" style={{ marginRight: 10 }}>
              Volver a página principal...
            </Button>
          </Box>
          )
        }
      </Box>
      </Grid>
    </>
  );
}
