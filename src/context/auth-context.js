import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducer/auth-reducer";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../utils/useAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [authState, authDispatch] = useReducer(authReducer, initialState);

   const {
      response: loginUserData,
      error: loginError,
      apiCall: setLoginResponse,
   } = useAxios();

   const {
      response: signupUserData,
      error: signupError,
      apiCall: setSignupResponse,
   } = useAxios();

   //if token is present in localstorage then show user logged in
   useEffect(() => {
      if (localStorage.getItem("token")) {
         authDispatch({ type: "TOGGLE_LOGIN" });
      }
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      if (loginUserData !== undefined) {
         localStorage.setItem("token", loginUserData.encodedToken);
         authDispatch({
            type: "SET_USER_CREDENTIALS",
            payload: loginUserData.foundUser,
         });
         navigate("/");
      }
      if (loginError) {
         authDispatch({
            type: "SET_ERROR",
            payload: "Credentials not found",
         });
      }
   }, [loginUserData, loginError]);

   useEffect(() => {
      if (signupUserData !== undefined) {
         localStorage.setItem("token", signupUserData.encodedToken);
         authDispatch({
            type: "SET_USER_CREDENTIALS",
            payload: signupUserData.createdUser,
         });
         navigate("/");
      }
      if (signupError) {
         authDispatch({
            type: "SET_ERROR",
            payload: "Some error occured, please try again",
         });
      }
   }, [signupUserData, signupError]);

   //setting the guest credentials
   const setGuestCredentials = () => {
      authDispatch({
         type: "SET_GUEST_CREDENTIALS",
         payload: ["test@admin.com", "admin123"],
      });
   };

   //login handler
   const loginHandler = async () => {
      if (authState.email !== "" && authState.password !== "") {
         setLoginResponse(null, {
            method: "post",
            url: "/api/auth/login",
            headers: {
               accept: "*/*",
            },
            data: {
               email: authState.email,
               password: authState.password,
            },
         });
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "Enter your details",
         });
      }
   };

   //checking login credentials
   const checkLoginCredentials = ({ name, value }) => {
      if (value === "") {
         authDispatch({
            type: "SET_ERROR",
            payload: `Enter your ${name}`,
         });
         return "";
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "",
         });
         return value;
      }
   };

   //signup handler
   const signupHandler = async () => {
      if (
         authState.email !== "" &&
         authState.password !== "" &&
         authState.name !== ""
      ) {
         setSignupResponse(null, {
            method: "post",
            url: "/api/auth/signup",
            headers: {
               accept: "*/*",
            },
            data: {
               name: authState.name,
               email: authState.email,
               password: authState.password,
            },
         });
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "Enter your details",
         });
      }
   };

   //validating signup credentials
   const checkSignupCredentials = ({ name, value }) => {
      const emailTest = /^\w+\@\w+\.\w{2,}$/;
      if (value === "") {
         authDispatch({
            type: "SET_ERROR",
            payload: `Enter your ${name}`,
         });
         return "";
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "",
         });
         if (name === "name") {
            if (value.length > 4) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Name should be more then 5 character",
               });
               return value;
            }
         }
         if (name === "email") {
            if (emailTest.test(value)) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Enter a valid email",
               });
               return value;
            }
         }
         if (name === "password") {
            if (value.length > 6) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Password should be more than 6 characters",
               });
               return value;
            }
         }
      }
   };

   //logging out user
   const logoutUser = () => {
      localStorage.removeItem("token");
      authDispatch({ type: "TOGGLE_LOGIN" });
      authDispatch({ type: "CLEAR_FIELDS" });
   };

   return (
      <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            loginHandler,
            setGuestCredentials,
            checkLoginCredentials,
            signupHandler,
            checkSignupCredentials,
            logoutUser,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
