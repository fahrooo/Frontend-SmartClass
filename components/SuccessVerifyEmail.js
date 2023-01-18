import { Box, Stack, Text, Icon, Link, Image, Button } from "@chakra-ui/react";
import React from "react";

const SuccessVerifyEmail = () => {
  return (
    <Box
      w="350px"
      h="max-content"
      bgColor="#393D43"
      borderRadius="40px"
      p="20px"
    >
      <Stack direction="column" alignItems="center">
        <Box w="100px" h="100px">
          <Image
            src="https://www.freeiconspng.com/uploads/success-icon-10.png"
            alt="success"
          />
        </Box>
        <Box>
          <Text fontSize="27px" color="#FFFFFF" fontWeight="700">
            Selamat!
          </Text>
        </Box>
        <Box>
          <Text fontSize="15px" color="#FFFFFF">
            Aktivasi Akun Berhasil, Silahkan Login
          </Text>
        </Box>
        <Box>
          <Button mt="10px" w="100%" colorScheme="messenger">
            Login
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SuccessVerifyEmail;
