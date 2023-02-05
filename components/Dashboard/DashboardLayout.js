import generateSidebarItems from "@/utils/sidebar";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DashboardMain from "./DashboardMain";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }) => {
  let sidebarItems = generateSidebarItems();
  console.log(sidebarItems);
  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      p="35px"
      gap="40px"
    >
      <DashboardSidebar items={sidebarItems} />
      <DashboardMain>{children}</DashboardMain>
    </Flex>
  );
};

export default DashboardLayout;
