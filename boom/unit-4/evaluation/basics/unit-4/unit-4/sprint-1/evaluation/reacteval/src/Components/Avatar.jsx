//enter code here
// Avatar should accept caption and image  as props
// do default export
function avatar(props){
    const{image,caption}=props
    const style={
        borderRadius:"50%"
    }
    return <div>
        <h2>{caption}</h2>
        <img src={image}  alt={caption} style={style}/>
    </div>
}
export default avatar;