import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SendVeryfyEmail = () => {
  return (
    <Box
      w="350px"
      h="max-content"
      bgColor="#393D43"
      borderRadius="40px"
      p="20px"
    >
      <Stack direction="column" alignItems="center">
        <Text fontSize="25px" color="#FFFFFF" mt="33px" fontWeight="700">
          Email Belum Terverifikasi!
        </Text>
        <Text fontSize="13px" color="#FFFFFF" mt="33px">
          Silahkan masukkan email anda untuk aktivasi akun
        </Text>
      </Stack>
      <Box mt="20px">
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
              placeholder="Email Address"
            />
          </FormControl>
        </Box>
        <Box w="100%" mt="20px">
          <Button w="100%" colorScheme="messenger">
            Kirim
          </Button>
        </Box>
        <Box mt="20px" display="flex" justifyContent="center">
          <Text fontSize="13px" color="#FFFFFF">
            Sudah memiliki akun?{" "}
            <Link
              color="#FF9567"
              onClick={() => {
                setForm(false);
              }}
            >
              Silahkan Login
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SendVeryfyEmail;
