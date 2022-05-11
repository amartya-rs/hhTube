import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./login-page.css";

const LoginPage = () => {
   const {
      authState: { email, password, error },
      authDispatch,
      loginHandler,
      setGuestCredentials,
      checkLoginCredentials,
   } = useAuth();

   return (
      <div className="login-page">
         <form className="auth-form">
            <div className="form-header">
               <h5>LOGIN</h5>
               <p className="p-sm">Please enter your email and password.</p>
            </div>
            <div className="form-field">
               <div>
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_EMAIL",
                           payload: checkLoginCredentials(e.target),
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
                           payload: checkLoginCredentials(e.target),
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
               onClick={loginHandler}
            >
               LOGIN
            </button>
            <div className="form-footer">
               <p className="p-sm">Not a user yet?</p>
               <Link to="/signup">Sign Up</Link>
            </div>
            <span className="helper font-medium" onClick={setGuestCredentials}>
               Use Guest Credentials
            </span>
         </form>
      </div>
   );
};

export { LoginPage };
