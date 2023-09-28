import "./Avatar.css"

export default function Avatar(props){
   
const {src,alt,width,rounded,name}=props;
    const styles={
        borderRadius:rounded? "50px":"0px",
        border:"1px solid red",
    }
    
    return (
        <div id="avatar">
            <img
             src={src}
            alt={alt}
            width={width}
            style={styles}
            >

            </img>
            <h1>{name}</h1>
           
 
        </div>
      
    )
}


