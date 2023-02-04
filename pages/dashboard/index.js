/* eslint-disable react-hooks/rules-of-hooks */
import DashboardDeviceItem from "@/components/Dashboard/DashboardDeviceItem";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardSidebarItem from "@/components/Dashboard/DashboardSidebarItem";
import useRemoteUnits from "@/components/hooks/useRemoteUnits";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Switch,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import cctv from "../../assets/images/cctv.png";
import door from "../../assets/images/door.png";
import lamp from "../../assets/images/lamp.png";
import ac from "../../assets/images/ac.png";
import tv from "../../assets/images/tv.png";
import speaker from "../../assets/images/speaker.png";

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
      maxH={{ base: "max-content", md: "100vh" }}
      minH={{ base: "max-content", md: "100vh" }}
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      p={{ base: "10px", md: "35px" }}
      gap="40px"
    >
      <DashboardSidebar />
      <Box
        bgColor="#262A2D"
        w="100%"
        minH={{ base: "max-content", md: "100%" }}
        borderRadius="55px"
        p={{ base: "15px", md: "30px" }}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          w="100%"
          h={{ base: "max-content", md: "100%" }}
          gap={4}
        >
          <Box
            w={{ base: "100%", md: "70%" }}
            h={{ base: "max-content", md: "100%" }}
          >
            <Box
              display={{ base: "none", md: "flex" }}
              w="100%"
              h="15%"
              gap={4}
            >
              <Box
                w={{ base: "100%", md: "60%", xl: "75%" }}
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                py={2}
              >
                <Text color="#FFFFFF" fontSize="25px" fontWeight="700">
                  HAI ANDIS
                </Text>
                <Box bgColor="#393D43" h={8} w="100%" borderRadius="15px"></Box>
              </Box>
              <Box
                w={{ base: "100%", md: "40%", xl: "25%" }}
                h="100%"
                py={2}
              >
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
                    8:30 PM
                  </Text>
                  <Text color="#FFFFFF" fontSize="20px" fontWeight="400">
                    03 Januari 2023
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              w="100%"
              h={{ base: "max-content", md: "85%", xl: "85%" }}
              py={2}
              overflowY="auto"
            >
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  xl: "repeat(4, 1fr)",
                }}
                gap={4}
              >
                <DashboardDeviceItem
                  bgColor="#9FB8C8"
                  colSpan={1}
                  image={door}
                  label="Pintu Utama"
                />
                <DashboardDeviceItem
                  bgColor="#EEEAFF"
                  colSpan={1}
                  image={lamp}
                  label="Lampu Utama"
                />
                <DashboardDeviceItem
                  bgColor="#EEEAFF"
                  colSpan={1}
                  image={lamp}
                  label="Lampu Samping"
                />
                <DashboardDeviceItem
                  bgColor="#EEEAFF"
                  colSpan={1}
                  image={tv}
                  label="Layar Digital"
                />
                <DashboardDeviceItem
                  bgColor="#9FB8C8"
                  colSpan={2}
                  image={ac}
                  label="AC Utama"
                />
                <DashboardDeviceItem
                  bgColor="#EEEAFF"
                  colSpan={1}
                  image={speaker}
                  label="Speaker"
                />
              </Grid>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "30%" }} h="100%" py={2}>
            <Box
              bgColor="#7A95A9"
              w="100%"
              h={{ base: "max-content", md: "100%" }}
              borderRadius="30px"
              p="20px"
            >
              <Text color="#FFFFFF" fontSize="25px" fontWeight="700">
                UNIT TI
              </Text>
              <Center py={5}>
                <Image src={cctv} alt="cctv" style={{ width: "90%" }} />
              </Center>
              <Center py={2}>
                <SimpleGrid
                  columns={{ base: 3, md: 2, xl: 3 }}
                  spacingY={{ base: 5, md: 5, xl: 4 }}
                  spacingX={{ base: 5, md: 10, xl: 10 }}
                  overflowY="auto"
                  h={{ base: "180px", md: "280px", xl: "180px" }}
                >
                  <DashboardSidebarItem label="Kelas A" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas B" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas C" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas D" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas E" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas F" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas E" icon={RxDashboard} />
                  <DashboardSidebarItem label="Kelas F" icon={RxDashboard} />
                </SimpleGrid>
              </Center>
            </Box>
          </Box>
          <Box display={{ base: "block", md: "none" }} w="100%" h="15%" gap={4}>
            <Box
              w={{ base: "100%", md: "60%", xl: "75%" }}
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              py={2}
            >
              <Text color="#FFFFFF" fontSize="25px" fontWeight="700">
                HAI ANDIS
              </Text>
              <Box bgColor="#393D43" h={8} w="100%" borderRadius="15px" mt={2}></Box>
            </Box>
            <Box
              w={{ base: "100%", md: "40%", xl: "25%" }}
              h="100%"
              py={2}
            >
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
                  8:30 PM
                </Text>
                <Text color="#FFFFFF" fontSize="20px" fontWeight="400">
                  03 Januari 2023
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
