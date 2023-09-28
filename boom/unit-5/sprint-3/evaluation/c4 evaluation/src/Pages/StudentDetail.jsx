import { useLocation } from "react-router-dom";

export const StudentDetail = () => {
  const location = useLocation();
  const { id, name, batch, student_code, score, green_card, Poster } = location.state;
  
  return (
    <div className={"student-card"}>
      <img src={Poster} alt="none" className="student-image" />
      <h1 className="student-id">{id}</h1>
      <h2 className="student-name">{name}</h2>
      <p className="student-code">{student_code}</p>
      <p className="student-batch">{batch}</p>
      <p className="student-score">{score}</p>
      <h3 className="student-green-card">{green_card}</h3>
    </div>
  );
};



// export const StudentDetail = () => {
//   return (
//     <div className={"student-card"}>
//       <h1 className="student-id">{/* Show Student Id here */}</h1>
//     </div>
//   );
// };



// import { useLocation } from "react-router-dom";

// export const StudentDetail = () => {
//   const location = useLocation();
//   const { id, name, batch, student_code, score, green_card, Poster } = location.state;
  
//   return (
//     <div className={"student-card"}>
//       <img src={Poster} alt="none" className="student-image" />
//       <h1 className="student-id">{id}</h1>
//       <h2 className="student-name">{name}</h2>
//       <p className="student-code">{student_code}</p>
//       <p className="student-batch">{batch}</p>
//       <p className="student-score">{score}</p>
//       <h3 className="student-green-card">{green_card}</h3>
//     </div>
//   );
// };



// - Show the `student id` in h3 tag with class `student-id`
// - Show image in image tag with class `student-image`
// - Show name with class `student-name`
// - Show student code in p tag with class `student-code`
// - Show batch in p tag with class `student-batch`
// - Show score in p tag with class `student-score`
// - Show the number of green cards in h3 tag with class `student-green-card`
