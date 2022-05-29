import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]); // estado inicial: carro vacío
    
    //método addItem => agrega un elemento y su cantidad al carro
    const addItem = ( item ) => {
    let cartTemp = [];
       if(isInCart(item.id) === -1){
         alert('El producto no estaba en el carro, se va a agregar'); 
        cartTemp = cart.concat(item);     
       }else{
         alert('El producto ya se encuentra en el carro!!');           
         cartTemp = cart.reduce((acc, prod) => {
            if(item.id !== prod.id){
                return acc.concat(prod);
            } else {
                return acc.concat({...prod, quantity: prod.quantity + item.quantity});
            }
        }, []); 
       }
       setCart(cartTemp);
    }

    //método removeItem => quita un elemento del carro
    const removeItem = ( itemId ) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart);
    }

    //método clear => quita todos los elementos del carro
    const clearCart = () => {
        setCart([]);
        alert('Se quitaron todos los elementos del carrrito!!');
    }

    //método isInCart => verifica si un elemento se encuentra en el carro
    const isInCart = (itemId) => {
        return cart.indexOf(itemId);
    }

    //método que va a determinar cuántas unidades de un producto hay en el carro
    const quantityInCart = ( id ) => {
        const item = cart.find(res => res.id === id);
        if (item) {
          return item.quantity;
        }
        return 0;
      }    

    return (
        <CartContext.Provider value={{ addItem, 
                                       removeItem,
                                       quantityInCart, 
                                       clearCart,
                                       cart                                      
                                    }}>
            { children }
        </CartContext.Provider>
    )

}