import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user-context";
import Dialog from "../dialog/dialog";
import { supaClient } from "../../api/supa-client";


const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");
  const { session } = useContext(UserContext);

  useEffect(() => {
    if (session?.user) {
      setShowModal(false);
    }
  }, [session]);

  return (
    <>
      <div >
        <button

          onClick={() => {
            setAuthMode("sign_in");
            setShowModal(true);
          }}
        >
          login
        </button>{" "}
        <span> or </span>{" "}
        <button
          onClick={() => {
            setAuthMode("sign_up");
            setShowModal(true);
          }}
        >
          sign up
        </button>
      </div>
      <Dialog
        open={showModal}
        setOpen={setShowModal}
        contents={
          <>
            <Auth
              supabaseClient={supaClient}
              appearance={{
                theme: ThemeSupa,
                // className: {
                //   container: "login-form-container",
                //   label: "login-form-label",
                //   button: "login-form-button",
                //   input: "login-form-input",
                // },
              }}
              view={authMode}
            />
            <button onClick={() => setShowModal(false)}>Close</button>
          </>
        }
      />
    </>
  );
}

export default Login;