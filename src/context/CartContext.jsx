import React from 'react'
import {useState, createContext} from 'react';

export const MiContexto = createContext({});

function CartContext( { children }) {

    const [cart, setCart] = useState([]);

    // const [darkMode,setDarkMode] = useState(true);

    const addItem = ( item ) =>{
        let newCart = [];
        if ( isInCart(item.id) ) {
            newCart = cart.reduce((acc, _item) => {
                if(item.id !== _item.id) {
                return acc.concat(_item);
                } else {
                return acc.concat({ ..._item, quantity: _item.quantity + item.quantity });
                }
            }, []);
        } else {
            newCart = cart.concat(item);
        }
        setCart(newCart);
    }

    const removeItem = ( id ) =>{
        const newCart = cart.filter( _item => _item.id !== id );
        setCart(newCart);
    }

    const isInCart = ( id ) => {
        return cart.some( _item => _item.id === id);
    }

    const clear = () => {
        setCart([])
    };

    const quantityInCart = ( id ) => {
        const item = cart.find(_item => _item.id === id);
        if (item) {
          return item.quantity;
        }
        return 0;
    }
    
    const totalInCart = () => {
        return cart.reduce( (acc, item) => {
          return acc = acc + item.quantity
        }, 0)
    }

    const totalPriceInCart = () => {
        return cart.reduce((acc, _item) => {
          return acc + (_item.quantity * _item.price)
        }, 0);
    }

    const addItemQuantity = ({ id }) => {
        let newCart = [];
        newCart = cart.reduce((acc, _item) => {
          if(id !== _item.id) {
            return acc.concat(_item);
          } else {
            return acc.concat({ ..._item, quantity: _item.quantity + 1});
          }
        }, []);
        setCart(newCart);
      }
    

    const removeItemQuantity = ({ id, quantity }) => {
        console.log(id)
        if (quantity === 1) {
          removeItem(id);
          return;
        }
    
        let newCart = [];
        newCart = cart.reduce((acc, _item) => {
          if (id !== _item.id) {
            return acc.concat(_item);
          } else {
            return acc.concat({ ..._item, quantity: _item.quantity - 1 });
          }
        }, []);
        setCart(newCart);
    
      }


    return (
        <MiContexto.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            quantityInCart,
            totalInCart,
            totalPriceInCart,
            addItemQuantity,
            removeItemQuantity
          }}>
            { children }
          </MiContexto.Provider>
        // <MiContexto.Provider value={{darkMode: darkMode , setDarkMode: setDarkMode, x : 100}}>

        // </MiContexto.Provider>
    )
}

export default CartContext