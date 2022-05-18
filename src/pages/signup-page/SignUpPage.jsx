import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import "./signup-page.css";

const SignUpPage = () => {
   const {
      authState: { name, email, password, error },
      authDispatch,
      signupHandler,
      checkSignupCredentials,
   } = useAuth();
   const { theme } = useTheme();

   return (
      <div className="signup-page">
         <form
            className={`auth-form ${theme === "dark" ? "dark-mode-bg" : ""}`}
         >
            <div className="form-header">
               <h5>SIGNUP</h5>
               <p className="p-sm">Please fill in your information below.</p>
            </div>
            <div className="form-field">
               <div>
                  <label className="h6 font-medium" htmlFor="name">
                     Name*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_NAME",
                           payload: checkSignupCredentials(e.target),
                        })
                     }
                     name="name"
                     className="text-input"
                     type="text"
                     placeholder="Kanye West"
                     value={name}
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_EMAIL",
                           payload: checkSignupCredentials(e.target),
                        })
                     }
                     className="text-input"
                     type="email"
                     name="email"
                     placeholder="kanye@xyz.com"
                     value={email}
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="password">
                     Password*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_PW",
                           payload: checkSignupCredentials(e.target),
                        })
                     }
                     name="password"
                     className="text-input"
                     type="password"
                     placeholder="***************"
                     value={password}
                  />
               </div>
            </div>
            <span className="auth-error">{error}</span>
            <button
               className="button primary"
               type="button"
               onClick={signupHandler}
            >
               SIGN UP
            </button>
            <div className="form-footer">
               <p className="p-sm">Already a user?</p>
               <Link
                  className={theme === "dark" ? "dark-mode-link" : ""}
                  to="/login"
               >
                  Login
               </Link>
            </div>
         </form>
      </div>
   );
};

export { SignUpPage };
