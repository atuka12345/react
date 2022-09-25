import { Grid, MenuItem, Select} from '@mui/material'
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useAxios from '../../APP/hooks/axios'
import PaginationComponent from '../shared/pagination'
import ProductcCard from './productcCard'

const Categprodlist = () => {
  const { categoryName } = useParams();
  const [page, setPage] = useSearchParams();
  const [sort, setSort] = useState("price,desc");
  const { data } = useAxios(
    `/products/category/${categoryName}?page=${page.get(
      "page"
    )}&sort=${sort}&size=3`
  );
    return (
    <div>
      <Select value={sort} onChange={(e)=>{
        setSort(e.target.value)
        setPage(1)
      }
      }>
        <MenuItem value={"price,desc"}>ფასის კლებადობით</MenuItem>
        <MenuItem value={"price,asc"}>ფასის ზრდადობით</MenuItem>
        <MenuItem value={"name,asc"}>A-Z</MenuItem>
        <MenuItem value={"name,desc"}>Z-A</MenuItem>
      </Select>
        <Grid container spacing={2}>
        {data.products?.length > 0 &&
          data.products.map((product) => {
            return (
              <Grid key={product._id} item xs={4} >
                <ProductcCard product={product} />
              </Grid>
            );
          })}
      </Grid>
        <PaginationComponent page={page || 1} setPage={setPage} totalPages={data.totalPages}/>

    </div>
  )
}

export default Categprodlist
const Wrapper = ({ isLoading, isError, children }) => {
    if (isLoading) {
      return <h1>Loading</h1>;
    }
    return children;
  };
  