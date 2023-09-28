export default function Button(props){
    let wow=props.arr.map((e)=>(<li>{e*3}</li>));
   return(<button>{wow}</button>)
}