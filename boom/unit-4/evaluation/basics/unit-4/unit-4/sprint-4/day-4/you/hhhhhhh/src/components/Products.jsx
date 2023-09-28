import React, { useEffect, useState } from "react";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";
import Pagination from "./Pagination"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [page,setPage]=React.useState(1)
  const [totalPage,setTotalPage]=React.useState(1);
  const [data,setData]=React.useState([]);
  const [limit,setLimit]=React.useState(3);


  const getData=(page)=>{
      axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/?limit=${limit}&page=${page}`
    ).then((res)=>{
      setData(res.data.data)
      setTotalPage(res.data.totalPages)
    }).catch((err)=>{
      console.log(err)
    })
  }
  

  React.useEffect(()=>{
    getData(page);
  },[])

  // const handlelimit=(limit,page)=>{
  //   setLimit(Number(limit))
  //   setPage(page)
  //   // HandleGetProduct({limit,page})
  //   getProducts(limit, page);
  // }

  return (
    <Flex>
      <Grid>{/* List of Products */}
      {

       data?.map((el)=>{
          // console.log(el)
          // console.log(el.brand)
          return  <Product key={el.id}
           brand={el.brand}
           img={el.img}
           category={el.category}
           price={el.price}
           details={el.details}
           id={el.id}
           />
        })
      }
      </Grid>
      {/* Pagination */}
      <Pagination page={page} totalPage={totalPage} limit={limit} setLimit={setLimit} setPage={setPage} getData={getData} />
    </Flex>
  );
};

export default Products;
