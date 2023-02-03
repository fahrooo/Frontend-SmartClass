import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DashboardNavbar from "./DashboardNavbar";

const DashboardMain = ({ children }) => {
  return (
    <Box bgColor="#262A2D" width="100%" borderRadius="55px" p="30px">
      <DashboardNavbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default DashboardMain;
