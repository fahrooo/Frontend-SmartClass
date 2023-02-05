import { Badge, Box, Center, GridItem, Switch, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const DashboardDeviceItem = ({ bgColor, colSpan, image, label }) => {
  const [power, setPower] = useState(false);
  return (
    <GridItem
      colSpan={colSpan}
      w="100%"
      h={{ base: "40", md: "44", xl: "44" }}
      bgColor={bgColor}
      borderRadius="30px"
      p={4}
    >
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="15px" fontWeight="500">
          <Badge colorScheme={power ? "green" : "red"} borderRadius="10px">
            {power ? "ON" : "OFF"}
          </Badge>
        </Text>
        <Switch
          colorScheme="purple"
          isChecked={power}
          onChange={() => setPower(!power)}
        />
      </Box>
      <Center h="70%">
        <Image src={image} alt="door" style={{ width: "70%" }} />
      </Center>
      <Center>
        <Text
          fontSize="15px"
          fontWeight="600"
          mt={{ base: "1", md: "1.5", xl: "2" }}
        >
          {label}
        </Text>
      </Center>
    </GridItem>
  );
};

export default DashboardDeviceItem;
