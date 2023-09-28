export default function Avatar(props) {
   
  
    const { src, name, width, rounded, hideName } = props;
    const design = {
      border: "5px solid green",
      borderRadius: rounded ? "50%" : "0",
      text: hideName ? name : ""
    };
   
    return (
      <>
        <div>
          <img
            src={src}
            width={width}
            style={{ borderRadius: design.borderRadius, border: design.border }}
            alt="none"
          ></img>
          <h1>{design.text}</h1>
        </div>
      </>
    );
    }