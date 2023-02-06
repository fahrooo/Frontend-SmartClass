import {
  Badge,
  Box,
  Center,
  GridItem,
  Switch,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const DashboardDeviceItem = ({
  bgColor,
  colSpan,
  image,
  label,
  control,
  satuan,
  maxValue,
  minValue,
  gapValue,
}) => {
  const [power, setPower] = useState(false);
  const [value, setValue] = useState(0);

  const handleUp = async () => {
    if (value == maxValue) {
      setValue(maxValue);
      try {
        await axios.post("http://localhost:5000/relaypost", {
          topic: "BANGTI",
          message: value.toString(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setValue(value + gapValue);
      try {
        await axios.post("http://localhost:5000/relaypost", {
          topic: "BANGTI",
          message: value.toString(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDown = async () => {
    if (value == minValue) {
      setValue(minValue);
      try {
        await axios.post("http://localhost:5000/relaypost", {
          topic: "BANGTI",
          message: value.toString(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setValue(value - gapValue);
      try {
        await axios.post("http://localhost:5000/relaypost", {
          topic: "BANGTI",
          message: value.toString(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePower = async () => {
    setPower(!power);

    try {
      await axios.post("http://localhost:5000/relaypost", {
        topic: "BANGTI",
        message: !power ? "on" : "off",
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        <Switch colorScheme="purple" isChecked={power} onChange={handlePower} />
      </Box>
      <Center h="70%" gap={2}>
        <Image src={image} alt="door" style={{ width: "70%" }} />
        {control == true && (
          <VStack mt={1} w="30px">
            <Icon
              as={MdOutlineKeyboardArrowUp}
              boxSize={6}
              bgColor="#AD4ED980"
              color="white"
              borderRadius="50%"
              _hover={{ bgColor: "#7B3E97" }}
              onClick={handleUp}
              cursor="pointer"
            />
            <Text fontWeight="500">
              {value}
              {satuan}
            </Text>
            <Icon
              as={MdOutlineKeyboardArrowDown}
              boxSize={6}
              bgColor="#AD4ED980"
              color="white"
              borderRadius="50%"
              _hover={{ bgColor: "#7B3E97" }}
              onClick={handleDown}
              cursor="pointer"
            />
          </VStack>
        )}
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
