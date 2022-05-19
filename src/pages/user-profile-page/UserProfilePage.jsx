import { useAuth } from "../../context";
import { user_profile } from "../../assets/index";
import "./user-profile-page.css";

const UserProfilePage = () => {
   const {
      authState: { name, email },
   } = useAuth();

   return (
      <main className="page mt-4">
         <div className="user-details-wrapper">
            <img
               className="avatar-circle avatar-sm"
               src={user_profile}
               alt="user profile"
            />
            <h5 className="font-medium">{`Name: ${name}`}</h5>
            <h5 className="font-medium">{`Email: ${email}`}</h5>
         </div>
      </main>
   );
};

export { UserProfilePage };
