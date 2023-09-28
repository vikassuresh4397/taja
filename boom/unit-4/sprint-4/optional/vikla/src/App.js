
import React, { useReducer, useEffect } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import { Stack, Center, Button } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case "FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, data, error } = state;

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`)
      .then((res) => {
        dispatch({ type: "SUCCESS", data: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FAILURE", error: err });
      });
  }, []);

  const [showDashboard, setShowDashboard] = React.useState(true);

  const toggleForm = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <Stack p={5} className="App">
      <Center>
        <Button
          width="150px"
          className="toggleForm"
          onClick={toggleForm}
        >
          {showDashboard ? "Show Add Cat Page" : "Show Dashboard Page"}
        </Button>
      </Center>
      {showDashboard ? <Dashboard data={data} /> : <Form />}
    </Stack>
  );
}


