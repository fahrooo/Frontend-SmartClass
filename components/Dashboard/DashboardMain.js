import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DashboardNavbar from "./DashboardNavbar";

const DashboardMain = ({ children }) => {
  return (
    <Box
      bgColor="#262A2D"
      w="100%"
      minH={{ base: "max-content", md: "100%" }}
      borderRadius="55px"
      p={{ base: "15px", md: "30px" }}
    >
      <DashboardNavbar />
      <Box
        h={{ base: "75%", md: "80%" }}
        mt={8}
        bgColor="#393D43"
        borderRadius="30px"
        p="30px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardMain;
