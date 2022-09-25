
import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/productcontext";


const Navbar = () => {
  const { mainProductData } = useProductContext();
  return (
    <div >
      {mainProductData.categories?.length > 0 &&
        mainProductData.categories.map((category) => {
          return (
            <Link
              key={category._id}
              to={`/products/categories/${category.name}?page=1`}
            >
              <div > {category.name}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Navbar;