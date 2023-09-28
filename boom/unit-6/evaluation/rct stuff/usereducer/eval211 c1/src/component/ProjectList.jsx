import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({project,setProject}) => {
  const handlelist = (id) => {
    console.log(id);
    let newList = project.map((item, index)=>{
      if(index === id){
        return {...item, status:item.status === "pending" ? "completed" : "reviewed"}
      } else return item
    })
    setProject(newList)
  }
  return (
    <div className="project-list-wrapper">
    {
    project.length > 0 ?(
        <table data-testid="project-container">  
  <thead>
    <tr>
     <th>S.no</th>
     <th>Name</th>
     <th>Tech Stack</th>
     <th>Assigned To</th>
     <th>Current Status</th>
     <th>Toggle</th>
    </tr>
  </thead>
  <tbody>
  {
    project?.map((element,index)=>(
      <tr key={index}>
       <ProjectRow val={element} id={index} handle={(e)=>handlelist(e)}></ProjectRow>
      </tr>
    ))
  }
  </tbody>
</table>
    ):(<h1 data-testid="no-project-container">No Project Found</h1>)
    }
    </div>

  );
};
