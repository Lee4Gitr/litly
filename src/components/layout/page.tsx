import { Box, Theme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar";

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

  return (
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
  )
}
