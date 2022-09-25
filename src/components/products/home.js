import React from 'react'
import { useProductContext } from '../../context/productcontext'
import ProductcCard from "./productcCard"
const Home = () => {
    const {mainProductData}=useProductContext()
    console.log("mp",mainProductData)
  return (
    <div>
      { mainProductData.products?.length > 0 &&
        mainProductData.products.map((product) =>(
        <ProductcCard key={product._id} product={product} /> 
       ) )}
        </div>
  )
}

export default Home