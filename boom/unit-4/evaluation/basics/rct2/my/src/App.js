
import './App.css';
import Button from './button';
import Avatar from './Avatar';

const squareArray = [5,10,15,20].map(el=><li>{el*2}</li>);

const userAvatar = [{
  id:1,
  imgUrl:"https://cdn.pixabay.com/photo/2022/01/17/22/20/subtract-6945896__340.png",
  name:"popye",
  rounded:true,
  width:"200px",
  alt:"non",
},
  {
    id:2,
  imgUrl:"https://cdn.pixabay.com/photo/2022/01/17/22/20/subtract-6945896__340.png",
  name:"olive",
  rounded:false,
  width:"200px",
  alt:"non",
  }];

  let useAvatar=userAvatar.map((user)=>(<Avatar src={user.imgUrl} alt={user.alt} width={user.width} rounded={user.rounded} name={user.name} ></Avatar>));

function App() {


  const PressButton=()=>{
      console.log("yes pressed button")
  }


  
  return (
 
    


    <div className="App">
    
    
      <Button 
      text="i am a text"  
      name="I am a name" 
      clickfunc={PressButton}>
        
      </Button> 
    {/* <Avatar 
    src="https://cdn.pixabay.com/photo/2022/01/17/22/20/subtract-6945896__340.png" alt="none" 
    width="400px" rounded="true" name="vikas"
  
    border="1px solid red"
     />  */}

     {/* {useAvatar} */}
    </div>
  );
}

export default App;
