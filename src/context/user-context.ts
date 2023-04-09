import { createContext } from "react";
import { SupashipUserInfo } from "../hooks/use-session";

const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null
})

export default UserContext;