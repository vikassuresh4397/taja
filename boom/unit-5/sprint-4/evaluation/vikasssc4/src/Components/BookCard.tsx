import React from "react";
import { formDataType } from "../Pages/AddBook";

export type formmm ={
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id?: number;
  handleDelete:(id:number)=>void;
  handleLike:(id:number)=>void;
}

export const BookCard = ({name,author,image,chapter,quantity,id,handleDelete,handleLike}:formmm) => {
  const ID=Number(id);

  return <div className="book-card">
<img src={image} alt="none" />
<h1 className="book-name">{name}</h1>
<h1 className="book-author">{author}</h1>
<h1 className="book-chapter">{chapter}</h1>
<button data-testid="increase-quantity" onClick={()=>handleLike(ID)} disabled={quantity >= 10}>Quantity ++</button>
<h1 className="book-quantity">{quantity}</h1>
<button data-testid="decrease-quantity" disabled={quantity == 0}>Quantity --</button>


<button data-testid="delete-button" onClick={()=>handleDelete(ID)} >DELETE</button>



{/* "name": "Full Stack Developement",
      "author": "Masai",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQQL2RxlJlPLeIMtK80ttEj8YNhwohIYqM6NlKS6PUtyASHzc-f_e2tPs6t5cfjxJ3U&usqp=CAU",
      "chapter": 12,
      "quantity": 6,
      "id": 1 */}


{/* 1. Image with class `book-image`
  2. Name with class `book-name`
  3. Author with class `book-author`
  4. Chapters with class `book-chapter`
  5. Increase quantity button with `data-testid="increase-quantity"`
  6. Decrease quantity button with `data-testid="decrease-quantity"`
  7. Quantity count with class `book-quantity`
  8. Delete button with `data-testid=delete-button` */}
  </div>;
};
