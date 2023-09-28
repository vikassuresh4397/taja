import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [isMarried, setIsMarried] = useState(false);

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      gender,
      city,
      is_married: isMarried,
      age,
    };

    fetch('https://good-gold-horse-ring.cyclic.app/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setEmail('');
    setName('');
    setPassword('');
    setAge('');
    setGender('');
    setCity('');
    setIsMarried(false);
  };

  return (
    <div>
      <h3>Registration form</h3>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <label htmlFor="age">Age</label>
      <input
        type="text"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <label htmlFor="gender">Gender</label>
      <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />

      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />

      <label htmlFor="is_married">Married</label>
      <input
        type="checkbox"
        name="is_married"
        checked={isMarried}
        onChange={(e) => setIsMarried(e.target.checked)}
      />
      <br />

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export { Signup };


// import React, { useState } from 'react'
// // name:String,
// // email:String,
// // password:String,
// // age: Number,
// // gender:String,
// // city:String,
// // is_married:Boolean
// const Signup = () => {
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword]=useState("");
//   const [age,setAge] = useState("");
//   const [gender,setGender] = useState("");
//   const [city,setCity] = useState("");
//   const [is_married,setMarried] = useState("");


// const handleSubmit=()=>{
//   const payload={
//     name,
//     email,
//     password,
//     gender,
//     city,
//     is_married,
//     age,
//   }

//   fetch("http://localhost:3000/users/register",{
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload)
//   }).then(res=>res.json())
//   .then(res=>{
    
//     console.log(res)
//   }
    
//    )
//   .catch(err=>console.log(err))

//   setEmail("");
//   setName("");
//   setPassword("");
// }

//   return (
//     <div>

//       <h3>Registration form</h3>
//       <label htmlFor="username">Username</label>
//       <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}></input>
//       <br />
//       <label htmlFor="email">Email</label>
//       <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
//       <br />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
//       <br />

//       <label htmlFor="age">Age</label>
//       <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)} ></input>
//       <br />

//       <label htmlFor="gender">Gender</label>
//       <input type="text" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} ></input>
//       <br />

//       <label htmlFor="city">City</label>
//       <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} ></input>
//       <br />

//       <label htmlFor="is_married">is_Married</label>
//       <input type="text" name="is_married" value={is_married} onChange={(e)=>setMarried(e.target.value)} ></input>
//       <br />
//       <button onClick={handleSubmit}>Sign UP</button>
//     </div>
//   )
// }

// export {Signup}


// // import React, { useState } from 'react'

// // const Signup = () => {
// //   const [name,setName] = useState("")
// //   const [email,setEmail] = useState("")
// //   const [pass,setPassword]=useState("")

// // const handleSubmit=()=>{
// //   const payload={
// //     name,
// //     email,
// //     pass
// //   }

// //   fetch("http://localhost:3000/users/register",{
// //     method:"POST",
// //     headers:{
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(payload)
// //   }).then(res=>res.json())
// //   .then(res=>{
    
// //     console.log(res)
// //   }
    
// //    )
// //   .catch(err=>console.log(err))

// //   setEmail("");
// //   setName("");
// //   setPassword("");
// // }

// //   return (
// //     <div>

// //       <h3>Registration form</h3>
// //       <label htmlFor="username">Username</label>
// //       <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}></input>
// //       <br />
// //       <label htmlFor="email">Email</label>
// //       <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
// //       <br />
// //       <label htmlFor="pass">Password</label>
// //       <input type="password" name="pass" value={pass} onChange={(e)=>setPassword(e.target.value)} ></input>
// //       <br />
// //       <button onClick={handleSubmit}>Sign UP</button>
// //     </div>
// //   )
// // }

// // export {Signup}