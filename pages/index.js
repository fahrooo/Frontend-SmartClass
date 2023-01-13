import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Home() {
  const [lampu, setLampu] = useState(true);

  const handleLampu = async () => {
    setLampu(!lampu);

    console.log(lampu);

    try {
      await axios.post("http://localhost:5000/relaypost", {
        topic: "BANGTI",
        message: `${lampu}`,
      });
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          bgImage="url('/_next/static/media/kelas.ec384f45.png')"
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
            <Box w="350px" h="440px" bgColor="#393D43" borderRadius="40px">
              <Box display="flex" justifyContent="center">
                <Text
                  fontSize="27px"
                  color="#FFFFFF"
                  mt="33px"
                  fontWeight="700"
                >
                  Log In
                </Text>
              </Box>
              <Box m="25px">
                <Box>
                  <FormControl>
                    <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      h="35px"
                      bgColor="#D9D9D9"
                      borderRadius="15px"
                      placeholder="email address"
                    />
                  </FormControl>
                </Box>
                <Box mt="20px">
                  <FormControl>
                    <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      h="35px"
                      bgColor="#D9D9D9"
                      borderRadius="15px"
                      placeholder="********"
                    />
                  </FormControl>
                </Box>
                <Box mt="20px" display="flex" justifyContent="end">
                  <Text fontSize="13px" color="#FFFFFF" cursor="pointer">
                    Lupa password ?
                  </Text>
                </Box>
                <Box w="100%" mt="20px">
                  <Button w="100%" colorScheme="messenger">
                    Log In
                  </Button>
                </Box>
                <Box mt="20px" display="flex" justifyContent="start">
                  <Text fontSize="13px" color="#FFFFFF">
                    Belum memiliki akun?
                  </Text>
                  <Text
                    ms="5px"
                    fontSize="13px"
                    color="#FF9567"
                    cursor="pointer"
                  >
                    Silahkan Register
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Image src={kelas} alt="kelas" /> */}
          {/* <Stack
            border="1px"
            borderColor="gray.200"
            alignItems="center"
            justifyContent="center"
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
