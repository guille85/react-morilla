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
import { serverTimestamp } from "firebase/firestore";

export default function Checkout() {

  const [orderId, setOrderId] = useState('');
  const [enableButton, setEnableButton] = useState(true);


  const { cart, totalPriceCart, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    email: "",
    name: "",
    phone: "",
  });
 
  const [errors, setErrors] = useState({
    email: false,
    name: false,
    phone: false
  });

  const handleChange = (e) => {
    e.preventDefault();
    if(!e.target.value) {
      setErrors({...errors, [e.target.name]: true});
    } else {
      setErrors({...errors, [e.target.name]: false});
      setBuyer({ ...buyer, [e.target.name]: e.target.value });
    }
    
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let total = 0;
      total = totalPriceCart();
      const order = {
        buyer,
        cart,
        fecha: serverTimestamp(),
        total,
      };

      const db = getFirestore();
      const orders = collection(db, "orders");
      addDoc(orders, order).then(({ id }) => {
        setOrderId(id);
        clearForm();
        setEnableButton(false);
        clearCart();
      });
    }
  }

  const clearForm = () => {
    setBuyer({ email: "", name: "" , phone: ""});
  }

  const clearErrors = () => {
    setErrors({email:false, name: false, phone:false})
  }

  const validateForm = () => {
    
    clearErrors();
    let validForm = true;

    if (!buyer.name) {
      setErrors(formErrors => ({ ...formErrors, name: true }));
      validForm = false;
    }
    if (
      !buyer.phone ||
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(buyer.phone)
    ) {
      setErrors(formErrors => ({ ...formErrors, phone: true }));
      validForm = false;
    }
    if (!buyer.email || 
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(buyer.email)
    ) {
      setErrors(formErrors => ({ ...formErrors, email: true }));
      validForm = false;
    }

    return validForm

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
            id="outlined-required"
            label="Nombre"
            onChange={handleChange}
            value={buyer.name}
            name="name"
            error={ errors.name }
            helperText={ errors.name && 'Debe ingresr su nombre'}
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
            id="outlined-required"
            label="Email"
            onChange={handleChange}
            value={buyer.email}
            name="email"
            error={errors.email}
            helperText={errors.email && 'Debe ingresar un email ejemplo@ejemplo.com'}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
            id="outlined-required"
            label="Telefono"
            onChange={handleChange}
            value={buyer.phone}
            name="phone"
            error={errors.phone}
            helperText={errors.phone && 'Debe ingresar un teléfono'}
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
            disabled={!enableButton}
          >
            Comprar
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
