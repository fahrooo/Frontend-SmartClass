import { Box, Center, Text, VStack, Icon } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import { RxDashboard } from "react-icons/rx";
import DashboardSidebarItem from "./DashboardSidebarItem";

const DashboardSidebar = () => {
  return (
    <Box
      as="aside"
      display={{ base: "none", md: "block" }}
      bgColor="#262A2D"
      width="123px"
      borderRadius="40px"
    >
      <Center mt="31px" display="flex" flexDirection="column">
        <Box w="50px">
          <Image src={logo} alt="logo" />
        </Box>
        <Text
          fontSize="12px"
          color="#FFFFFF"
          fontWeight="bold"
          textAlign="center"
          mt="10px"
        >
          Innovation Connect
        </Text>
      </Center>
      <VStack mt="30px" textAlign="center" gap="5px">
        <DashboardSidebarItem label="Dashboard" icon={RxDashboard} />
      </VStack>
    </Box>
  );
};

export default DashboardSidebar;
