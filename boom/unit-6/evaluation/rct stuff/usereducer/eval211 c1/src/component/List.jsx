import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({project, setProject}) => {
    console.log(project)


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
        project.length > 0 ? (
          <table data-testid="project-container"> 
          <thead>
          <tr>
            <td>S.No</td>
            <td>NAME</td>
            <td>TECH STACK</td>
            <td>ASSIGNED TO</td>
            <td>STATUS</td>
            <td>TOGGOLE</td>
          </tr>
        </thead>

        <tbody>
          {
            project?.map((item, index)=> (
              <tr key={index}>
                <ProjectRow val={item} id={index} handle={(e)=>handlelist(e)} />
              </tr>

            ))
          }
        </tbody>
      </table>
        ) : (
          <h1 data-testid="no-project-container">No Project Found</h1>
        )
      }      
    </div>
  );
};