
import React, { useEffect, useState } from "react";
import { instance } from "../../../APP/instance";
import { FcSearch } from "react-icons/fc";





const Search = () => {
  const [value, setValue] = useState("");
  const [filtereResults, setFiltereResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const filterByName = async () => {
        const { data } = await instance.get(`/products/search?name=${value}`);
      };
      if (value) {
        filterByName();
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  const searchItems = (e) => {
    setValue(e);

   
  };

  return (
    
      <div >
        <input
          type="text"
          placeholder="search..."
          value={value}
          onChange={(e) => searchItems(e.target.value)}
        />
        <FcSearch></FcSearch>
      </div>
     
    
  );
};

export default Search;