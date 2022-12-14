import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import useAxios from "../APP/hooks/axios";
import { instance } from "../APP/instance";
import { useNavigate } from "react-router-dom";
const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const {
    isLoading,
    data: mainProductData,
    setData: setMainProduct,
  } = useAxios("/products");
  const [selectedProduct, setSelectedProduct] = useState(null);
const navigate = useNavigate ()
  const [isProductUpdating, setIsProductUpdating] = useState(false);

  const saveProduct = async (product) => {
    
    const path = isProductUpdating
      ? `/products/${selectedProduct._id}`
      : "/products";
    let method = isProductUpdating ? "put" : "post";
    try {
      navigate("/")
      const resp = await instance[method](path, { ...product });
    } catch (error) {
      
    } finally {
     
      setSelectedProduct(null);
      setIsProductUpdating(false);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        mainProductData,
        saveProduct,
        setIsProductUpdating,
        setSelectedProduct,
        selectedProduct,
        setMainProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};