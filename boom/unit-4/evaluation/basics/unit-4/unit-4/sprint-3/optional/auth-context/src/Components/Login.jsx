import React from 'react'



export default function Login() {
    const[username,setUsername]=React.useState("")
    const[password,setPassword]=React.useState("")
    const getdata=(u,p)=>{
        return( {
           u:u,p:p
        }
    )
    }
    /*
    fetch('https://reqbin.com/echo/post/json', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": 78912 })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
    */
   async function fetchLogindata(e){
    e.preventDefault()
    console.log("fetchandlogin")
            
       let response= fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(getdata(username,password))
       })
       const data=await response.json();
       console.log(data)
    }

const myfun =async()=>{
    console.log("mufun")
    try {
        let res = fetch("https://reqres.in/api/login")
    let data = await res.json()
    console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}
console.log("sdfabkbaskb")
function updateusername(e)
{
    setUsername(e.target.value)
    
}
function updatepassword(e)
{
    setPassword(e.target.value)
    
}

    return (
        <div>
            <form data-testid = "auth_form"  >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={updateusername}
                    value={username}
                    />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={updatepassword}
                    value={password}
                />
                <br />
                <input onSubmit={fetchLogindata} type = "submit"/>
                <button onClick={myfun}>show data</button>

            </form>                
        </div>
    )
}
