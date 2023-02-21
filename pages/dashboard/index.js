/* eslint-disable react-hooks/rules-of-hooks */
import DashboardDeviceItem from "@/components/Dashboard/DashboardDeviceItem";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import {
  Box,
  Center,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useToast,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import cctv from "../../assets/images/cctv.jpg";
import door from "../../assets/images/door.png";
import lamp from "../../assets/images/lamp.png";
import ac from "../../assets/images/ac.png";
import tv from "../../assets/images/tv.png";
import speaker from "../../assets/images/speaker.png";
import { IoMdNotifications } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import DashboardKelasItem from "@/components/Dashboard/DashboardKelasItem";
import { formatDate } from "node-format-date";
import generateSidebarItems from "@/utils/sidebar";
import QRCodeModal from "@/utils/Modal/QRCodeModal";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
const Dashboard = () => {
  const router = useRouter();
  const toast = useToast();

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

  let sidebarItems = generateSidebarItems();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [qrValue, setQrValue] = useState("");

  const handleQR = () => {
    onOpen();
    setQrValue("TI-KELAS-A");
  };

  const handleSendSocket = () => {
    socket.emit("hello", {
      message: "HAI REY",
    });
  };

  return (
    <Flex
      maxH={{ base: "max-content", md: "100vh" }}
      minH={{ base: "max-content", md: "100vh" }}
      bgGradient="linear(to-bl, #5B7688, #F3D5C1 80%)"
      p={{ base: "10px", md: "35px" }}
      gap="40px"
    >
      <DashboardSidebar items={sidebarItems} />
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
              <Box w={{ base: "100%", md: "40%", xl: "25%" }} h="100%" py={2}>
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
            <Box
              w="100%"
              h={{ base: "max-content", md: "85%", xl: "85%" }}
              overflowY="auto"
              py={{ base: 2, md: 8 }}
            >
              <Button colorScheme={"blue"} onClick={handleQR} mb={4}>
                QR Code
              </Button>
              <Button colorScheme={"blue"} onClick={handleSendSocket} mb={4} ml={4}>
                Send Socket
              </Button>
              <QRCodeModal isOpen={isOpen} onClose={onClose} value={qrValue} />
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
                  control={true}
                  satuan="°C"
                  maxValue={26}
                  minValue={16}
                  gapValue={1}
                />
                <DashboardDeviceItem
                  bgColor="#EEEAFF"
                  colSpan={1}
                  image={speaker}
                  label="Speaker"
                  control={true}
                  satuan="%"
                  maxValue={100}
                  minValue={0}
                  gapValue={50}
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
                <Image src={cctv} alt="cctv" style={{ borderRadius: "30px" }} />
              </Center>
              <Text fontSize="20px" color="white" fontWeight="700" mb={4}>
                8 Kelas
              </Text>
              <Center>
                <SimpleGrid
                  columns={{ base: 3, md: 2, xl: 3 }}
                  spacingY={{ base: 5, md: 4, xl: 4 }}
                  spacingX={{ base: 5, md: 6, xl: 8 }}
                  overflowY="auto"
                  h={{ base: "195px", md: "280px", xl: "185px" }}
                  py={2}
                >
                  <DashboardKelasItem
                    label="Kelas A"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas B"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas C"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas D"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas E"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas F"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas E"
                    icon={SiGoogleclassroom}
                  />
                  <DashboardKelasItem
                    label="Kelas F"
                    icon={SiGoogleclassroom}
                  />
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
              <Box
                bgColor="#393D43"
                h={6}
                w="100%"
                borderRadius="15px"
                display="flex"
                justifyContent="end"
                alignItems="center"
                px={2}
                mt={2}
              >
                <Icon as={IoMdNotifications} color="white" boxSize={"5"} />
              </Box>
            </Box>
            <Box w={{ base: "100%", md: "40%", xl: "25%" }} h="100%" py={2}>
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
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
