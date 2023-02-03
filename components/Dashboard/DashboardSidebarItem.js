import { Box, Text, Icon } from "@chakra-ui/react";
import React from "react";

const DashboardSidebarItem = ({ label, icon }) => {
  return (
    <Box
      bgColor="#F0FBFF"
      w="80px"
      h="80px"
      borderRadius="25px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="12px" fontWeight="bold">
        {label}
      </Text>
      <Icon as={icon} boxSize={8} mt="5px" />
    </Box>
  );
};

export default DashboardSidebarItem;
