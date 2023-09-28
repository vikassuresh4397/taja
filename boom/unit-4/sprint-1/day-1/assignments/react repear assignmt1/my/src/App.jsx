
import './App.css';

function App() {
  return (
    <div className="App">
    
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/British_Pork_Cuts.svg/400px-British_Pork_Cuts.svg.png"></img>
      <p>wow</p>
    </div>
  );
}

export default App;


function App() {
  return React.createElement(
    "div",
    {
      className: "container",
      style: {
        padding: "1rem",
        display: "flex",
        gap: "1rem"
      }
    },
    [
      React.createElement(
        "div",
        {},
        React.createElement("img", {
          src: "https://i.imgflip.com/2gytch.jpg",
          width: "360px"
        })
      ),
      React.createElement("div", {}, [
        React.createElement("h1", {}, "React is the best!")
      ])
    ]
  );
}



