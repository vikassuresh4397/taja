import data from "../nonfiction.json";
import BookCard from "./BookCard";

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {
          data.map((el)=>{
            return <BookCard key = {el.img} {...el}/>
          })
        }
      </div>
    </div>
  );
}
