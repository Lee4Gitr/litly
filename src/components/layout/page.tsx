import { Box, Theme } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import { useSession } from "../../hooks/use-session";
import UserContext from "../../context/user-context";

const styles = {
  appFrame: {
    overflowY: 'auto',
    overflowX: 'hidden',
    flexDirection: 'column',
    minHeight: '100vh',
    display: 'flex'
  }
}

export const Page = () => {
  const supashipUserInfo = useSession();
  return (

    <UserContext.Provider value={supashipUserInfo}>
      <Box sx={{
        overflowY: 'auto',
        overflowX: 'hidden',
        flexDirection: 'column',
        minHeight: '100vh',
        display: 'flex'
      }}>
        <NavBar />
        <Outlet />
      </Box >
    </UserContext.Provider>
  )
}
