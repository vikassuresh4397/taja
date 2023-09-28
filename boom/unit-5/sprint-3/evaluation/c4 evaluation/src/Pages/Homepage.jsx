import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { StudentList } from "../Components/StudentList";
// import { MainRoutes } from "./MainRoutes";

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <StudentList />
      {/* <MainRoutes></MainRoutes> */}

    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
