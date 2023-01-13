import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useState } from "react";
import axios from "axios";

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
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
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
          </Stack>
        </Box>
      </main>
    </>
  );
}
