import { Link } from "react-router-dom";

export const StudentCard = ({id,name,batch,student_code,score,green_card,Poster}) => {
  return (
    <div className={"student-card"}>
     <img src={Poster} alt="image" class="student-image"  ></img>
     <p class="student-batch">batch:{batch}</p>
     <h3 class="student-name">Name:{name}</h3>
     <h3 class="student-green-card">green_card:{green_card}</h3>
    <h1>student_code:{student_code}</h1>
    <h1>Score:{score}</h1>
     <button class="student-detail"><Link to={`/edit/${id}`}></Link>View Details</button>


    </div>
  );
};
