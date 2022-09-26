import React from 'react'
import { useLocation } from 'react-router-dom'
import useAxios from '../../APP/hooks/axios'

const Singleproduct = () => {
    const location = useLocation()
    const { id, category } = location.state;
    const { data } = useAxios(`/products/category/${category}/${id}`);
    console.log("location",location)
  return (
    <div>
      <img src={data.product?.image} />
      <h1>{data.product?.name}</h1>
      <p>{data.product?.description}</p>
      <div>
        
      </div>
    </div>
  )
}

export default Singleproduct
