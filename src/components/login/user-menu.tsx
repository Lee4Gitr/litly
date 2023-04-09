import { useContext } from "react";

import UserContext from "../../context/user-context";
import { supaClient } from "../../api/supa-client";

const UserMenu = () => {
  const { profile } = useContext(UserContext);

  return (
    <>
      <div >
        <h2>Welcome {profile?.username || "dawg"}.</h2>
        <button
          onClick={() => supaClient.auth.signOut()}

        >
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;