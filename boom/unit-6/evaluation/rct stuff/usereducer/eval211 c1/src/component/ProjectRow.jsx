import React from "react";

export const ProjectRow = ({val, id, handle}) => {
  return (
    <>
      <td data-testid="project-id">{id+1}</td>
      <td data-testid="project-name">{/* Show project name */}{val.name}</td>
      <td data-testid="project-tech-stack">{/* Show tech stack */}{val.tech_stack}</td>
      <td data-testid="project-assigned-to">{/* Show assigned to value  */}{val.assigned_to}</td>
      <td data-testid="project-status">
        {/* Show the current status value */} {val.status}
      </td>
      <td>
        <button data-testid="toggle-button" onClick={()=>handle(id)} disabled={val.status ==="reviewed"}>Toggle</button>
      </td>

    </>
  );
};