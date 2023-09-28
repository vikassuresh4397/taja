import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/StudentReducer/action";
import {StudentCard} from "./StudentCard";
import { useLocation, useSearchParams } from "react-router-dom";
export const StudentList = () => {
  const students = useSelector((store)=>store.studentReducer.students);
const [searchParams] =useSearchParams();
const location=useLocation();
  // console.log("students",students);
  const dispatch = useDispatch();
  let obj={
    params:{
       batch:searchParams.getAll("batch"),
       _limit:10,
       _page:searchParams.get("page"),
    }
  }

  useEffect(()=>{
    dispatch(getProducts(obj))
  },[location.search]);

  return (
    <div>
      <div data-testid="student-list">
        {/* Map through the student list using StudentCard component  */}
        {students.length>0 && 
        students.map((el)=>{
          return <StudentCard key={el.id} {...el}></StudentCard>
        })
        
        }
      </div>
    </div>
  );
};
