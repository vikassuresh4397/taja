// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getBooks } from "../Redux/BookReducer/action";

// export const BookList = () => {
//   const dispatch=useDispatch();
//   useEffect(()=>{
//     dispatch(getBooks)
//   })
//   return (
//     <div data-testid="book-list">
//       {/* Map through books using BookCard component */}
      
//     </div>
//   );
// };

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BookCard} from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/BookReducer/action";
export const BookList = () => {
  const books = useSelector((store)=>store.bookReducer.books);
const [searchParams] =useSearchParams();
const location=useLocation();
  // console.log("students",students);
  const dispatch = useDispatch();
  let obj={
    params:{
       category:searchParams.getAll("category"),
       _sort:searchParams.get("order") && "release_year",
       _order:searchParams.get("order")
    }
  }

  useEffect(()=>{
    dispatch(getBooks(obj))
  },[location.search]);

  return (
    <div>
      <div data-testid="book-list">
        {/* Map through the student list using StudentCard component  */}
        {books.length>0 && 
        books.map((el)=>{
          return <BookCard key={el.id} {...el}></BookCard>
        })
        
        }
      </div>
    </div>
  );
};
