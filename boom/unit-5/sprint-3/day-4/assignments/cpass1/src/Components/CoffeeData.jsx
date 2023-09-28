import React from 'react'

export default function CoffeeData() {
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont" >
        {/* map the below div against your coffee data */}
        <div className = "coffee-item" >
          <img className = "image" alt = "img" width = "70%" />
          <div className = "title"> </div>
          <div className = "price"> </div>
        </div>
    </div>
   </div>
   
  )
}