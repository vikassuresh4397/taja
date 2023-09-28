import "./styles.css";
import Heading from "./Components/Heading";
import Image  from "./Components/Image";
import PlayPause from "./Components/PlayPause";

export default function App() {
  return (
    <div className="App">
      <Heading/>
      <Image />
      <PlayPause/>
    </div>
  );
}

// const QuestionDescription = () => {
//   return (
//     <div>
//       <Heading/>
//       <Image imgSrc={details.src} alt={details.alt}/>
//     </div>
//   );
// };
