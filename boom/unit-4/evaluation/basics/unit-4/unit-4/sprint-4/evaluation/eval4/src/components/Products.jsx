import React, { useEffect, useState } from "react";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";
import Pagination from "./Pagination"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [page,setPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1);
  const [data,setData]=useState([]);
  const [limit,setLimit]=useState(3);


  const getProducts=(limit, page)=>{
      axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/`,{
        params:{
          page: page,
          limit: limit
        }
      }
    ).then((res)=>{
      setData(res.data.data)
      setTotalPage(res.data.totalPages)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  // const HandleGetProduct=(params)=>{
  //   getProducts(params)
  //   .then((res)=>{
  //     // console.log(res.data.data)
  //     // console.log(res)
  //     setData(res.data.data)
  //     setTotalPage(res.data.totalPages)
  //   })
  //   .catch((err)=>console.log(err))
  // }

  useEffect(()=>{
    getProducts(3,1);
    // HandleGetProduct({limit,page})
  },[])

  const handlelimit=(limit,page)=>{
    setLimit(Number(limit))
    setPage(page)
    // HandleGetProduct({limit,page})
    getProducts(limit, page);
  }

  return (
    <Flex>
      <Grid>{/* List of Products */}
      {

       data?.map((el)=>{
          // console.log(el)
          // console.log(el.brand)
          return <Product key={el.id}
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
      <Pagination page={page} totalPage={totalPage} limit={limit} onlimitChange={handlelimit} />
    </Flex>
  );
};

export default Products;
