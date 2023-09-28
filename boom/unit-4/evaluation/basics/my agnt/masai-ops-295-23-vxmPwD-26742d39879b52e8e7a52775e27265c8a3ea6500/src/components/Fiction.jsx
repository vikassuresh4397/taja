import data from "../fiction.json";
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

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
