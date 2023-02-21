import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';

const CheckLogInContext = createContext({
  authorization: { email: null, rol: null },
  login: () => {},
  logout: () => {},
  errorMessage: "Error al introducir email o password",
});
export default CheckLogInContext;

const MY_AUTH_APP = "MY_AUTH_APP";

export function LogInContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      id: null,
      email: null,
      rol: null,
      
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  async function login(e, credentials) {
   
    e.preventDefault();
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (response.status === 200) {
      const userCredentials = await response.json();
      const userData = jwt_decode(userCredentials.jwt);
      setAuthorization({ ...userData, token: userCredentials.jwt });
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify({ ...userData, token: userCredentials.jwt })
      );
      setErrorMessage(null);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Email o contraseña incorrecta',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      id: null,
      email: null,
      rol: null,
    });
  }

  const value = {
    authorization,
    errorMessage,
    login,
    logout,
  };

  return (
    <CheckLogInContext.Provider value={value}>
      {children}
    </CheckLogInContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(CheckLogInContext);
}
