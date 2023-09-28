import React, { useEffect, useState } from "react";
import { Individualpost } from "./Individualpost";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";


const NoteDisplay = () => {
  const [notes, setNotes] = useState([]);
  const[loading,setLoading]=useState(false);
  const [searchParams,setSearchParams] = useSearchParams();

  // let navigate = useNavigate()
  // const handleUpdate=(id)=>{
  // //  return  <Individualpost id={id}/>;
  //   // setSearchParams(id);
  //   navigate(`/indivdualPorject/${id}`)
  //   }
  //http://localhost:3000/posts/update
  const handleDelete = (id) => {
    fetch(`https://good-gold-horse-ring.cyclic.app/posts/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
       alert("Post deleted successfully");
       console.log(res)
      //  setNotes(res)
      setLoading(!loading)
      })
      .catch((err) => console.log(err));
  };
  

  useEffect(() => {
           //https://good-gold-horse-ring.cyclic.app/
    fetch("https://good-gold-horse-ring.cyclic.app/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        setNotes(data);
        console.log("data",data);
      })
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <div>
      {notes&&notes?.map((note) => (
        <div key={note._id}>
          <div>Title: {note.title}</div>
          <div>Body: {note.body}</div>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
          <button>Update</button>
        </div>
      ))}
    </div>
  );
};

export { NoteDisplay };


// import React, { useEffect, useState } from "react";

// const NoteDisplay = () => {
//   const [notes, setNotes] = useState([]);
//   const[loading,setLoading]=useState(false);
//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/notes/delete/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => {
//        alert("Post deleted successfully");
//        console.log(res)
//       //  setNotes(res)
//       setLoading(!loading)
//       })
//       .catch((err) => console.log(err));
//   };
  

//   useEffect(() => {
//     fetch("http://localhost:3000/notes", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
       
//         setNotes(data);
//         console.log("data",data);
//       })
//       .catch((err) => console.log(err));
//   }, [loading]);

//   return (
//     <div>
//       {notes&&notes?.map((note) => (
//         <div key={note._id}>
//           <div>Title: {note.title}</div>
//           <div>Body: {note.body}</div>
//           <button onClick={() => handleDelete(note._id)}>Delete</button>
//           <button>Update</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export { NoteDisplay };
