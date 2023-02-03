import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DashboardMain from "./DashboardMain";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      p="35px"
      gap="40px"
    >
      <DashboardSidebar />
      <DashboardMain>{children}</DashboardMain>
    </Flex>
  );
};

export default DashboardLayout;
