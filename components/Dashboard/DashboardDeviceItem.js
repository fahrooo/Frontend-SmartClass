import { Box, Center, GridItem, Switch, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const DashboardDeviceItem = ({ bgColor, colSpan, image, label }) => {
  return (
    <GridItem
      colSpan={colSpan}
      w="100%"
      h={{ base: "36", md: "40", xl: "36" }}
      bgColor={bgColor}
      borderRadius="30px"
      p={4}
    >
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="15px" fontWeight="500">
          ON
        </Text>
        <Switch colorScheme="purple" />
      </Box>
      <Center h="70%">
        <Image src={image} alt="door" style={{ width: "50%" }} />
      </Center>
      <Center>
        <Text fontSize="15px" fontWeight="500">
          {label}
        </Text>
      </Center>
    </GridItem>
  );
};

export default DashboardDeviceItem;
