export default function Avatar(props){
console.log(props.style)
    // const {color,backgroundColor,name}=props;

return (
    <>
        <div style={{color:"green"}}>MY name</div>
        <h1 style={{color:props.style.color,backgroundColor:props.style.backgroundColor}}>is</h1>
        <h2>{props.name}</h2>
    </>
)
}