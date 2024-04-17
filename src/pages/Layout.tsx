import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/layout";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
