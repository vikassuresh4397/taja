import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const BookCard = ({id,no_of_chapters,author,cover_photo,book_name,category,release_year}) => {

  console.log("Id",id);
  
  const navigate=useNavigate();

  return (
    <div className="book-card">
  
      <img src={cover_photo} alt="none" className="book-image" />
      <h3 className="book-name">{book_name}</h3>
      <h3 className="book-author">{author}</h3>
      <h3 className="book-category">{category}</h3>
      <h3 className="book-year">{release_year}</h3>
      <h3 className="book-chapter">{no_of_chapters}</h3>
      <Link to={`/edit-book/${id}`}>
      <button>
      Edit
        </button>
        </Link>
    </div>
  );
};

