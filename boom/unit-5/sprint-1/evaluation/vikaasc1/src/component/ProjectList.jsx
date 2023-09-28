import React from "react";

import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ projlist,setprojlist }) => {

  
  return (

  <div className="project-list-wrapper">


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
        {

          projlist.map((it) => {

            return <tbody >

              <tr>

                <ProjectRow key={it.id} {...it}/>

              </tr>
            </tbody>

          })
        }
      </table>
    </div>
  );
};