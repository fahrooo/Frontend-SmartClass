import { Box, Text, Icon } from "@chakra-ui/react";
import React from "react";

const DashboardSidebarItem = ({ item, pathname }) => {
  const isActive = item.path === pathname ? true : false;

  return (
    <Box
      bgColor={isActive ? "#F0FBFF" : "#32383D"}
      color={isActive ? "black" : "white"}
      w="80px"
      h="80px"
      borderRadius="25px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="12px" fontWeight="bold">
        {item.name}
      </Text>
      <Icon as={item.icon} boxSize={8} mt="5px" />
    </Box>
  );
};

export default DashboardSidebarItem;
