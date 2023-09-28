import './App.css';

import Button from './Components/Button';

import Avatar from './Components/Avatar';

const arr5=[1,2,3,4,5,6,7].map(el=><li>{el*2}</li>);

let ArrayObjects=[
  {
  id:"1",
  src:"https://media.istockphoto.com/id/1332414584/vector/baphomet-pentagramv.jpg?s=612x612&w=0&k=20&c=ZJDxK7ZWaspqwy01nscBo7fgZ5bp57VUqvHHiLexYkQ=",
  name:"Illuminati",
  width:"200px",
  rounded:true,

},
  {
    id:"2",
  src:"https://media.istockphoto.com/id/1352452811/vector/angry-black-witches-cat.jpg?s=612x612&w=0&k=20&c=8PQB9X53bDutxylYkVy9OShaFHr4HBuGwc6YwwzuyN0=",
  name:"Illuminati goat",
  width:"200px",
  rounded:false,

  },
  {
  id:"3",
  src:"https://media.istockphoto.com/id/1197474198/vector/burning-flames-effect-on-a-pentagram-symbol.jpg?s=612x612&w=0&k=20&c=H7gN5n38LPE41vnSd4Zy9p4kEch7J-k3mE8lKwxpcWk=",
  name:"Illuminati star",
  width:"200px",
  rounded:true,

}
];

const userAvatar=ArrayObjects.map((el)=>(
  <Avatar src={el.src} width={el.width} name={el.name} rounded={el.rounded}></Avatar>
));

function App() {
  console.log(arr5);
  return (
    <div className="App">
 
      <Button></Button>
     {userAvatar}
    </div>
  );
}

export default App;
