// code goes here
// do a default export

// function Title(yoo){
//     const{text}=yoo;
//     const sty={
//         color:"teal",
//     }
//     return (
//         <div>
// <h1 style={sty}>{text}</h1>
//         </div>
//     );
       
    
// }

function Title(yoo){

    const{text}=yoo;
    const sty={
        color:"teal"
    }
    return(

        <div>

            <h1 style={sty}>{text}</h1>

        </div>
        
    );
}

export default Title;

