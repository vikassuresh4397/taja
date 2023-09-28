import React from 'react'
import { Link } from 'react-router-dom'
export default function AllProducts() {
  const [data, setdata] = React.useState([])
  React.useEffect(()=>{
      getData()
    },[]);

  async function getData()
  {
    try {  
    let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    let response = await res.json();
    // const finalData={  products:response }
    console.log(response)
    // console.log(finalData)
    setdata(response)
    
    } catch (error) {
      console.log(error)
    }
  }
  console.log(data)
  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
        
        {/* {data &&
        data?.products &&
        data?.products?. */}
        {
        data.map((el)=>{
            return(
            <Link key={el.id} to={`/products/${el.id}`  }>
            {el.name}{el.price}
            </Link>
              )
          })
        }
    
      </div>
    </div>
  )
}