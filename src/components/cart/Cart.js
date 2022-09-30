import { Button } from "@mui/material";
import React from "react";
import { getUser } from "../../APP/util.js";
import { useCartContext } from "../../context/Cartcontext.js";
import './cart.css'
const Cart = () => {
    const { cart, saveCart } = useCartContext();
    const user = getUser();
    return (
      
      <div className="ccrid" >
       <h1>cart</h1>
        {cart?.length > 0
          ? cart.map((cartItem) => {
              return (
                <div key={cartItem.product._id}>
                  <h1>{cartItem.product.name}</h1>
                  
                 
                   <img  src={cartItem.product.image} alt="no_photo"/>
                   <h3>quantity {cartItem.quantity}</h3>
                </div>
              );
            })
          : "no items in cart"}
        {user && (
          <Button
            onClick={() => {
              saveCart(user._id);
            }}
            disabled={!cart.length}
            variant="contained"
            
          >
            Save cart
          </Button>
        )}
      </div>
    );
  };
  
  export default Cart;