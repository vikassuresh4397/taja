import React, { useState } from 'react'

const Notes = () => {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
 

const handleSubmit=()=>{
  const payload={
    title,
    body,
  
  }
  // http://localhost:3000/posts/update

  fetch("https://good-gold-horse-ring.cyclic.app/posts/add",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      authorization:`Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(payload)
  }).then(res=>res.json())
  .then(res=>{
    
    console.log(res)
  }
    
   )
  .catch(err=>console.log(err))

  setTitle("");
  setBody("");
  
}

  return (
    <div>

      <h3>Registration form</h3>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <br />
      <label htmlFor="body">Body</label>
      <input type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} ></input>
      <br />
     
      <button onClick={handleSubmit}>Sign UP</button>
    </div>
  )
}

export {Notes}
// import React, { useState } from 'react'

// const Notes = () => {
//   const [title,setTitle] = useState("")
//   const [body,setBody] = useState("")
 

// const handleSubmit=()=>{
//   const payload={
//     title,
//     body,
  
//   }

//   fetch("http://localhost:3000/notes/create",{
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json",
//       authorization:`Bearer ${localStorage.getItem("token")}`
//     },
//     body: JSON.stringify(payload)
//   }).then(res=>res.json())
//   .then(res=>{
    
//     console.log(res)
//   }
    
//    )
//   .catch(err=>console.log(err))

//   setTitle("");
//   setBody("");
  
// }

//   return (
//     <div>

//       <h3>Registration form</h3>
//       <label htmlFor="title">Title</label>
//       <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
//       <br />
//       <label htmlFor="body">Body</label>
//       <input type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} ></input>
//       <br />
     
//       <button onClick={handleSubmit}>Sign UP</button>
//     </div>
//   )
// }

// export {Notes}