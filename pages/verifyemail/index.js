/* eslint-disable react-hooks/rules-of-hooks */
import HeaderTitle from "@/components/HeaderTitle";
import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/kelas.png";
import VerifyEmail from "@/components/VerifyEmail";
import useActionGlobal from "@/store/UseActionGlobal";

const index = () => {
  const url = `url('${background.src}')`;
  const emailVerify = useActionGlobal((state) => state.email);
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
          justifyContent="center"
          py="70px"
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
            <VerifyEmail emailVerify={emailVerify} />
          </Box>
        </Box>
      </main>
    </>
  );
};

export default index;
