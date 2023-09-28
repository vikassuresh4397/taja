import React,{useEffect} from "react";
import { formDataType } from "../Pages/AddBook";
import { deleteBook, getBooks, updateQuantity } from "../api";
import { BookCard } from "./BookCard";

interface PropsType{
  book:formDataType[],
  setBooks: React.Dispatch<React.SetStateAction<formDataType[]>>
}


export const BookList = ({book,setBooks}:PropsType) => {


  const handleDelete=(id:number)=>{
    deleteBook(id).then(()=>{
      const fData=book?.filter((el)=>id!==el.id)
      setBooks(fData);
    })
  }

  const handleLike = (id: number) => {
    updateQuantity(id).then(() => {
      const mData = book?.filter((el) => {
        return id === el.id ? { ...el, quantity: el.quantity + 1 } : el;
      });
      setBooks(mData);
    });
  };
  
  // const handleDislike = (id: number) => {
  //   updateDisLike(id).then(() => {
  //     const mData = data?.filter((el) => {
  //       return id === el.id ? { ...el, dislike: el.dislike + 1 } : el;
  //     });
  //     setData(mData);
  //   });
  // };

  useEffect(()=>{
    getBooks().then((res:formDataType[]) => {
      console.log("res",res)
      setBooks(res)});
  },[]);

  return <div data-testid="book-list">
     {
        book.map((el)=>{
          return <BookCard key={el.id} {...el} handleDelete={handleDelete} handleLike={handleLike}   ></BookCard>
        })
      }
  </div>;
};
