import { Button } from "@mui/material";
import React from "react";
import { getUser } from "../../APP/util.js";
import { useCartContext } from "../../context/Cartcontext.js";

const Cart = () => {
    const { cart, saveCart } = useCartContext();
    const user = getUser();
    return (
      <div >
        {cart?.length > 0
          ? cart.map((cartItem) => {
              return (
                <div key={cartItem.product._id}>
                  <h1>{cartItem.product.name}</h1>
                  <p>{cartItem.quantity}</p>
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
            style={{
              borderRadius: "0 0 35px 35px",
              backgroundColor: "rgb(110, 2, 240)",
            }}
          >
            Save cart
          </Button>
        )}
      </div>
    );
  };
  
  export default Cart;