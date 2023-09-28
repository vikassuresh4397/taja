export default function Avatar(props){
    // const design={
    //     border:"5px solid green",
    //     borderRadius:borderRadius?"50%":"0%",
    // }
const {src,width,name,rounded}=props;
const design={
    border:"5px solid green",
    borderRadius:rounded?"50%":"0%",
}

    return(<>
        <div>
            <img src={src} width="200px" alt="none" style={{border:design.border,  borderRadius:design.borderRadius}}></img>
            <h1>{name}</h1>
        </div>
    </>)
}