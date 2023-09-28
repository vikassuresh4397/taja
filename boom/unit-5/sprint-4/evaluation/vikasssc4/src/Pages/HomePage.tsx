import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { BookList } from "../Components/BookList";
import { getBooks } from "../api";
import { formDataType } from "./AddBook";

export const HomePage = () => {
  const [book,setBooks]=useState<formDataType[]>([]);
  useEffect(()=>{
    getBooks();
  },[book])


  return (
    <div>
      <Navbar />
      <BookList book={book} setBooks={setBooks} />
    </div>
  );
};
