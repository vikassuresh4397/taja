
import Button from "./Button";
const styler = {
  color: "yellow",
  backgroundColor: "red",
};
// const { color, backgroundColor } = styler;
function App() {
  return (
    <div className="App">
      <Button style={{color:styler.color,backgroundColor:styler.backgroundColor}} text="hellom" name="vikas" />
    </div>
  );
}

export default App;
