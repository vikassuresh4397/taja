import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getStudent } from "../Redux/StudentReducer/action";

export const StudentList = () => {
  const [searchParams]=useSearchParams();

  const dispatch=useDispatch();
  const {students}=useSelector((store)=>store. studentReducer);
  const location = useLocation();

  let stnObj={
    params:{
      batch:searchParams.getAll("batch"),
    }
  }

useEffect(()=>{
  dispatch(getStudent(stnObj))
},[location.search])

  return (
    <div>
      <div data-testid="student-list">
       {students.length>0 && students.map((el)=>{
        return(<StudentList key={el.id} {...el}></StudentList>)
       })}
      </div>
    </div>
  );
};
