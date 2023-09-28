export default function Button(props){
    const {color,backgroundColor,...style}=props;
    const styler = {
        color: "yellow",
        backgroundColor: "red",
      };
  
    return (<>
        <button style={{color,backgroundColor}}>I am button</button>
        <h1 style={styler}>vikas</h1>
        <h2 style={{backgroundColor:styler.backgroundColor}}>suresh</h2>
        <h2 style={{color:"blue"}}>is</h2>
        <h2 style={{color:"violet",backgroundColor:"black"}}>awsome</h2>
    </>)
}