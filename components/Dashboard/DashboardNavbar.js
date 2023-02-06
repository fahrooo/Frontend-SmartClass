import { Box, Text, Icon } from "@chakra-ui/react";
import { formatDate } from "node-format-date";
import React, { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const DashboardNavbar = () => {
  const [now, setNow] = useState(new Date());
  const getDate = formatDate(now);
  const getHours = now.getHours();
  const getMinutes = now.getMinutes();

  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    setInterval(() => {
      setNow(new Date(), 3000);
    });
    setDate(getDate);
    setHours(getHours);
    setMinutes(getMinutes);
  }, [getDate, getHours, getMinutes]);
  return (
      <Box
        h={{ base: "20%", md: "15%" }}
        w={{ base: "100%", md: "60%" }}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 0, md: 4 }}
      >
        <Box
          w={{ base: "100%", md: "60%", xl: "70%" }}
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          py={2}
        >
          <Text color="#FFFFFF" fontSize="25px" fontWeight="700" mb={2}>
            HAI ANDIS
          </Text>
          <Box
            bgColor="#393D43"
            h={6}
            w="100%"
            borderRadius="15px"
            display="flex"
            justifyContent="end"
            alignItems="center"
            px={2}
          >
            <Icon as={IoMdNotifications} color="white" boxSize={"5"} />
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "40%", xl: "30%" }} h="100%" py={2}>
          <Box
            bgColor="#393D43"
            h="100%"
            borderRadius="30px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text color="#FFFFFF" fontSize="25px" fontWeight="700">
              {hours}:{minutes < 10 ? "0" + minutes : minutes}{" "}
              {hours >= 12 ? "PM" : "AM"}
            </Text>
            <Text color="#FFFFFF" fontSize="20px" fontWeight="400">
              {date}
            </Text>
          </Box>
        </Box>
      </Box>
  );
};

export default DashboardNavbar;
