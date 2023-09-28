
import React, { useState } from 'react'
const Login = () => {

const [email,setEmail] = useState("")
const [password,setPassword]=useState("")

const handleSubmit=()=>{
const payload={
 
  email,
  password
}
// https://good-gold-horse-ring.cyclic.app/
fetch("https://good-gold-horse-ring.cyclic.app/users/login",{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload)
}).then(res=>res.json())
.then(res=>{
  localStorage.setItem("token",res.token);
  console.log(res)
})
.catch(err=>console.log(err))

setEmail("");

setPassword("");
}

return (
  <div>

    <h3>Login form</h3>
   
    <label htmlFor="email">Email</label>
    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
    <br />
    <button onClick={handleSubmit}>Login INN</button>
    </div>
  )
}

export {Login}

//   import React, { useState } from 'react'
//   const Login = () => {

//   const [email,setEmail] = useState("")
//   const [pass,setPassword]=useState("")

// const handleSubmit=()=>{
//   const payload={
   
//     email,
//     pass
//   }
  
//   fetch("http://localhost:3000/users/login",{
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload)
//   }).then(res=>res.json())
//   .then(res=>{
//     localStorage.setItem("token",res.token);
//     console.log(res)
//   })
//   .catch(err=>console.log(err))
  
//   setEmail("");
  
//   setPassword("");
// }

//   return (
//     <div>

//       <h3>Login form</h3>
     
//       <label htmlFor="email">Email</label>
//       <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
//       <br />
//       <label htmlFor="pass">Password</label>
//       <input type="password" name="pass" value={pass} onChange={(e)=>setPassword(e.target.value)} ></input>
//       <br />
//       <button onClick={handleSubmit}>Login INN</button>
//       </div>
//     )
//   }
  
//   export {Login}