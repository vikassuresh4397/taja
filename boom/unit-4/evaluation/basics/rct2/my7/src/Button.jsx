

// const styler = {
//   color: "yellow",
//   backgroundColor: "red",
// };
// const { color, backgroundColor } = styler;

export default function Button(props) {
  const { text, name } = props;
  return (
    <>
      <button>{name}</button>
      <h1 style={{ color, backgroundColor }}>helo dear{color}</h1>
      <h2 style={{color:"blue"}}>fdbndfbdff{text}</h2>
    </>
  );
}