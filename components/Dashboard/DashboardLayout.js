import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DashboardMain from "./DashboardMain";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      py="35px"
      px="50px"
      gap="40px"
    >
      <DashboardSidebar />
      <DashboardMain />
    </Flex>
  );
};

export default DashboardLayout;
