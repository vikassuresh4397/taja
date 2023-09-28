export default function Button(props){
    
    const {text,name}=props
    return (<>
        <button >{text}</button>
        <h1>{name}</h1>
    </>)
  }