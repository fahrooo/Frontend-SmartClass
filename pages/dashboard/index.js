/* eslint-disable react-hooks/rules-of-hooks */
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import useRemoteUnits from "@/components/hooks/useRemoteUnits";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import cctv from "../../assets/images/cctv.png";

const Dashboard = () => {
  const router = useRouter();
  const toast = useToast();

  const { data } = useRemoteUnits();
  console.log(data);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.delete("http://localhost:5000/logout");
      console.log(result.data.status, result.data.message);

      if (
        result.data.status === 200 &&
        result.data.message === "Clear Token Successful"
      ) {
        Cookies.remove("nama");
        Cookies.remove("email");
        Cookies.remove("unit");
        Cookies.remove("role");
        Cookies.remove("isLogin");

        toast({
          title: "Logout Berhasil!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      p="35px"
      gap="40px"
    >
      <DashboardSidebar />
      <Box bgColor="#262A2D" width="100%" borderRadius="55px" p="30px">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
          gap={10}
        >
          <GridItem colSpan={3} h="10">
            <Text
              position={{ base: "relative", md: "absolute" }}
              color="#FFFFFF"
              fontSize="25px"
              fontWeight="700"
            >
              HAI ANDES
            </Text>
            <Box display="flex" justifyContent="end">
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
          </GridItem>
          <GridItem
            colSpan={2}
            bgColor="#7A95A9"
            borderRadius="30px"
            p="20px"
            h="max-content"
          >
            <Text fontSize="30px" fontWeight="700">
              UNIT TI
            </Text>
            <Center>
              <Image
                src={cctv}
                alt="cctv"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%" }}
              />
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Dashboard;
