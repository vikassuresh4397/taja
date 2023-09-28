import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const Form = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={data.email}
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label>PASSWORD</label>
          <input
            type="text"
            placeholder="password"
            value={data.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", payload: e.target.value })
            }
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
