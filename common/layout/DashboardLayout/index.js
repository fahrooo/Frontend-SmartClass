import DashboardBottomBar from "@/common/components/Dashboard/DashboardBottomBar";
import DashboardMain from "@/common/components/Dashboard/DashboardMain";
import DashboardSidebar from "@/common/components/Dashboard/DashboardSidebar";
import generateSidebarItems from "@/common/utils/sidebar";
import { Flex } from "@chakra-ui/react";

const DashboardLayout = ({ children }) => {
  let sidebarItems = generateSidebarItems();
  return (
    <>
      <Flex
        maxH={{ base: "125vh", md: "100vh" }}
        minH={{ base: "125vh", md: "100vh" }}
        bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
        p={{ base: "10px", md: "35px" }}
        gap="40px"
        mb={{ base: "10", md: "0" }}
      >
        <DashboardSidebar items={sidebarItems} />
        <DashboardMain>{children}</DashboardMain>
      </Flex>
      <DashboardBottomBar items={sidebarItems} />
    </>
  );
};

export default DashboardLayout;
