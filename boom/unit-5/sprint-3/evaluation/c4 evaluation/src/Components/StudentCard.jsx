import { useNavigate } from "react-router-dom";

export const StudentCard = ({id,name,batch,student_code,score,green_card,Poster}) => {
  const navigate=useNavigate();
  // const handleDetail = ()=>{
  //   navigate(`/student/${id}`);
    
  //  };


   const handleDetail = () => {
    navigate(`/student/${id}`, { state: { id, name, batch, student_code, score, green_card, Poster } });
  };
  
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img src={Poster} alt="none" className="student-image"/>
      <h1 className="student-name">{name}</h1>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card">{green_card}</h3>
      <button className="student-detail" onClick={handleDetail}>View Details</button>

    </div>
  );
};




// - Show image in image tag with class `student-image`
// - Show name with class `student-name`
// - Show batch in p tag with class `student-batch`
// - Show the number of green card in h3 tag with class `student-green-card`
// - Show `View Details` button with class `student-detail`
// * Do not add any extra text, only response values should be present *
// * For example `Name: "Ankit"` or `Card: 5` will not work *



// "id": 1,
// "name": "Ritesh kamthe",
// "batch": "RCT211",
// "student_code": "fw22_74",
// "score": 5,
// "green_card": 4,
// "Poster": "https://assets.webiconspng.com/uploads/2016/12/User-Icon.png"