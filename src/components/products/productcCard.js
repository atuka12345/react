import {   CardContent, Rating} from '@mui/material'
import { Link,  } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import { instance } from '../../APP/instance'
import { useUserContext } from '../../context/userContext'
import { useCartContext } from '../../context/Cartcontext'
import { useProductContext } from '../../context/productcontext'
import { isUSerAdmin } from '../../APP/util'
import { useNavigate } from 'react-router-dom'
import './productcard.css'

const ProductcCard = ({product}) => {
  const [productRating, setProductRating] = useState(product.averageRating);
  const { userData } = useUserContext();
  const { addToCart, removeFromCart, cart } = useCartContext();
  const { setSelectedProduct, setIsProductUpdating, setMainProduct } =
    useProductContext();
  const isAdmin = isUSerAdmin();

  const isProductInCart = cart?.find(
    (cartItem) => cartItem.product?._id === product._id
  );
  const navigate = useNavigate();

  useEffect(() => {
    setProductRating(product.averageRating);
  }, [product]);

  const onRatingChange = async (e) => {
    try {
      await instance.post(
        `/products/${product._id}/users/${userData._id}/rate`,
        {
          rating: +e.target.value,
        }
      );
      const { data } = await instance.get(`/products`);
      setMainProduct(data);
    } catch (error) {}
  };

  return (
    <div className='div'>
     
        <CardContent  >
          <Link 
            to={`/products/categories/${product.category}/${product.name}`}
            state={{ id: product._id, category: product.category }}
          ><br></br>
            <h1 className='h1'>{product.name}</h1>
            <h3 className='h3'> ${product.price}</h3>
            <div className='kai'> 
            <img src={product.image} alt="no_photo" />
             </div>
          </Link>
          <div className='rate'>
          <Rating 
            value={productRating}
            onChange={onRatingChange}
            precision={0.5}
            
         
         />

         </div>

         <br></br>
{isProductInCart ? (
            <>
              <button className='buttonio' onClick={() => addToCart(product)}>+</button>
             <h7>{isProductInCart.quantity}</h7> 
              <button className='buttonioi' onClick={() => removeFromCart(product._id)}>-</button>
            </>
          ) : (
            <button className='buttoni' onClick={() => addToCart(product)}>Add to cart</button>
          )}
           {isAdmin && (
            <button className='lon'
              onClick={() => {
                setIsProductUpdating(true)
                setSelectedProduct(product)
                navigate(`/products/${product._id}/edit`)
              }}
            >
              Edit
            </button>
          )}

          
        </CardContent>
        <div >
          
        </div>
      
    </div>
  );
};



export default ProductcCard