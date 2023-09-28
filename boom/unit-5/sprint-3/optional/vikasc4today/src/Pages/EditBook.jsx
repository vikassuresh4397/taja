import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";

export const EditBook = () => {
 
  const [book_name,setBook_name]=useState("");
  const [author,setAuthor]=useState("");
  const [no_of_chapters,setNo_of_chapters]=useState("");
  const {id} = useParams();
  const books = useSelector((store)=>store.bookReducer.books);
  const dispatch=useDispatch();

  useEffect(()=>{
    const data=books.find((el)=>el.id===+id);
    setBook_name(data?.book_name)
    setAuthor(data?.author)
    setNo_of_chapters(data?.no_of_chapters)
  },[]);

  const handleChangename=(e)=>{
    setBook_name(e.target.value)
  
  }
  const handleChangeauthor=(e)=>{
    
    setAuthor(e.target.value)
   
  }
  const handleChangechapter=(e)=>{
   
    setNo_of_chapters(e.target.value)
  }

  const handleEdit = ()=>{
    const data1={book_name};
    const data2={author};
    const data3={no_of_chapters};
    dispatch(editBook(id,data1,data2,data3))
  }

 
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID:{id} </h1>
      <input type="text" placeholder="Name" data-testid="book-name" onChange={handleChangename}/>
      <input type="text" placeholder="Author" data-testid="book-author" onChange={handleChangeauthor}/>
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
        onChange={handleChangechapter}
      />
      <button data-testid="update-book" onClick={handleEdit}>Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;



