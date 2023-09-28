import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
const [isAuth, setIsAuth] = useState(false);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [token, setToken] = useState("");

const login = async (email, password) => {
setLoading(true);
try {
const response = await fetch("https://reqres.in/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
});
const data = await response.json();
if (data.token) {
setIsAuth(true);
setToken(data.token);
} else {
setError(data.error);
}
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};

const logout = () => {
setIsAuth(false);
setToken("");
};

return (
<AuthContext.Provider
value={{
isAuth,
loading,
error,
token,
login,
logout,
}}
>
{props.children}
</AuthContext.Provider>
);
};

export default AuthContextProvider;