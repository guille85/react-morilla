import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]); // estado inicial: carro vacío
    
    //método addItem => agrega un elemento y su cantidad al carro
    
    const addItem = ( item ) => {
    let cartTemp = [];
       if(isInCart(item.id) === false){ 
        cartTemp = cart.concat(item);     
       }else{       
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
    }

    //método isInCart => verifica si un elemento se encuentra en el carro
    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    //método que va a determinar cuántas unidades de un producto hay en el carro
    const quantityInCart = ( id ) => {
        const item = cart.find(res => res.id === id);
        if (item) {
          return item.quantity;
        }
        return 0;
      }  
    
      //método que indica la cantidad total de unidades de todos los productos que hay en el carro 
      const totalInCart = () => {
        return cart.reduce( (acc, item) => {
          return acc = acc + item.quantity
        }, 0)
      }

      const totalPriceCart = () => {
        return cart.reduce((acc, _item) => {
          return acc + (_item.quantity * _item.price)
        }, 0);
      }

    return (
        <CartContext.Provider value={{ addItem, 
                                       removeItem,
                                       quantityInCart, 
                                       clearCart,
                                       cart,
                                       totalInCart,
                                       totalPriceCart
                                    }}>
            { children }
        </CartContext.Provider>
    )

}