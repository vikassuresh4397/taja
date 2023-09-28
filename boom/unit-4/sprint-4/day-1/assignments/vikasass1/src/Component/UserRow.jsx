import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return (
    
          <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{role}</td>
            <td>{maritalStatus ? "Married" : "Unmarried"}</td>
          </tr>
     
  );
};
export { UserRow };