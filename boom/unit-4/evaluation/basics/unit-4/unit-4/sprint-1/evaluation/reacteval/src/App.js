import Button from ".Component/Button";
import Button from ".Component/Avatar"



export default function App() {
  const detail={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU",
    caption:"sweet boy"
  }
  return (
    <div className="App">{/* add Button and  Avatar component here */} 
    <Button/>
    <Avatar imgSrc={detail.image} caption={detail.caption}/>
    </div>
  );
}
