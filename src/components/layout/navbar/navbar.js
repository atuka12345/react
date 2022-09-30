
import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/productcontext";
import "../navbar/navbar.css"
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
const Navbar = () => {
  const { mainProductData } = useProductContext();
  return (
    <div ><h4 className="zaqa">categories:</h4>
      {mainProductData.categories?.length > 0 && 
        mainProductData.categories.map((category) => {
      
             return (
         
            
           <div  >

         <Link 
              key={category._id}
              to={`/products/categories/${category.name}?page=1`}
            >
              <div className="categories"> {category.name}</div>
            </Link>

           </div> 
           
         
         
          );
        })}  
    </div>
  );
};

export default Navbar;