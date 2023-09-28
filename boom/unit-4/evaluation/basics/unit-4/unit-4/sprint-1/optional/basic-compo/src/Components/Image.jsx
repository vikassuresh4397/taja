// Write Code here
// do a default export

function Image(props){
    const {src,title,alt,width,height}=props
    return <div>
        <img src={src} alt={alt} width={width} height={height} 
        />
        <h2>{title}</h2>
    </div>
}
export default Image;
