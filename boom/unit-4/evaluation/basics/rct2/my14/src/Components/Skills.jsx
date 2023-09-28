export default function Skills(props) {
    let wow=props.items.map((el)=>(<li>{el}</li>));
    
    // console.log(wow)
    return (
      <>
        <button>I am a skill</button>
        {wow}
      </>
    );
  }
  