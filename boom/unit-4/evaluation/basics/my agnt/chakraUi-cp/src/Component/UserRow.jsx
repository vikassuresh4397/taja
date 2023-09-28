import React from "react";
import {Td,Tr} from '@chakra-ui/react'

// use Td component from  from chakra ui to display the user details
const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return <>
  <Tr>
    <Td>{id}</Td>
    <Td>{name}</Td>
    <Td>{gender}</Td>
    <Td>{role}</Td>
    <Td>{maritalStatus}</Td>
  </Tr>
  </>;
};
export { UserRow };
