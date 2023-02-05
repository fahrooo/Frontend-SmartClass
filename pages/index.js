import Image from "next/image";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import background from "../assets/images/kelas.png";
import Login from "@/components/Login.js";
import Register from "@/components/Register";
import { Toast } from "@chakra-ui/react";

export default function Home() {
  const [lampu, setLampu] = useState(true);
  const [form, setForm] = useState(true);

  const handleLampu = async () => {
    setLampu(!lampu);

    try {
      await axios.post("http://localhost:5000/relaypost", {
        topic: "BANGTI",
        message: lampu ? "on" : "off",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const url = `url('${background.src}')`;
  return (
    <>
      <main>
        <Box
          w="100%"
          h="600"
          bgGradient="linear(to-b, #355D77 20%, rgba(150, 155, 158, 0.389207), rgba(91, 118, 136, 0))"
          position="absolute"
          borderBottomRadius="50%"
          filter="auto"
          blur="1px"
          top="-20px"
        />
        <Box
          bgImage={url}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box position="absolute">
            <Box mb="50px" display="flex" justifyContent="center">
              <Stack direction="column" alignItems="center">
                <Image src={logo} alt="logo" />
                <Text fontSize="15px" color="#FFFFFF" fontWeight="bold">
                  Innovation Connect
                </Text>
              </Stack>
            </Box>
            {form ? (
              <Login setForm={setForm} />
            ) : (
              <Register setForm={setForm} />
            )}
          </Box>
          {/* <Image src={kelas} alt="kelas" /> */}
          {/* <Stack
            border="1px"
            borderColor="gray.200"
            alignItems="center"
            justifyContent="center"
            position="absolute"
          >
            <Text fontSize="xl" color="gray.900">
              Controlling Lampu
            </Text>
            <Switch size="lg" onChange={handleLampu} />
            <Text fontSize="xl" color="gray.900">
              {lampu ? "off" : "on"}
            </Text>
          </Stack> */}
        </Box>
      </main>
    </>
  );
}
