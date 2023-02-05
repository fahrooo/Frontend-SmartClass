import { Box, Text, Icon } from "@chakra-ui/react";
import React, { useState } from "react";

const DashboardKelasItem = ({ label, icon }) => {
  const [kelas, setKelas] = useState("Kelas A");

  const isActive = label === kelas ? true : false;
  return (
    <Box
      bgColor={isActive ? "#EEEAFF" : "#A0B8CC"}
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

export default DashboardKelasItem;
