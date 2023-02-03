import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DashboardNavbar = () => {
  return (
    <Box>
      <Text
        position={{ base: "relative", md: "absolute" }}
        color="#FFFFFF"
        fontSize="25px"
        fontWeight="700"
      >
        HAI ANDES
      </Text>
      <Box display="flex" justifyContent="center">
        <Box
          w="240px"
          h="70px"
          bgColor="#393D43"
          borderRadius="30px"
          textAlign="center"
        >
          <Text color="#FFFFFF" fontSize="25px" fontWeight="700">
            8:30 PM
          </Text>
          <Text color="#FFFFFF" fontSize="20px" fontWeight="400">
            03 Januari 2023
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
