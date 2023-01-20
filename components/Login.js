/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { GrMail } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import React from "react";

const Login = ({ setForm }) => {
  return (
    <Box
      w="350px"
      h="max-content"
      bgColor="#393D43"
      borderRadius="40px"
      py="10px"
    >
      <Box display="flex" justifyContent="center">
        <Text fontSize="27px" color="#FFFFFF" mt="33px" fontWeight="700">
          Login
        </Text>
      </Box>
      <Box m="25px">
        <Box>
          <InputGroup>
            <InputLeftElement
              fontSize="20px"
              color="gray.300"
              pointerEvents="none"
              children={<GrMail />}
            />
            <Input
              type="email"
              placeholder="Email Address"
              variant="flushed"
              color="gray.300"
            />
          </InputGroup>
        </Box>
        <Box mt="20px">
          <InputGroup>
            <InputLeftElement
              fontSize="20px"
              color="gray.300"
              pointerEvents="none"
              children={<FaLock />}
            />
            <Input
              type="password"
              placeholder="********"
              variant="flushed"
              color="gray.300"
            />
          </InputGroup>
        </Box>
        <Box mt="20px" display="flex" justifyContent="end">
          <Text fontSize="13px" color="#FFFFFF">
            <Link href="#">Lupa Password?</Link>
          </Text>
        </Box>
        <Box w="100%" mt="20px">
          <Button w="100%" colorScheme="messenger">
            Login
          </Button>
        </Box>
        <Box mt="20px" display="flex" justifyContent="center">
          <Text fontSize="13px" color="#FFFFFF">
            Belum memiliki akun?{" "}
            <Link
              color="#FF9567"
              onClick={() => {
                setForm(false);
              }}
            >
              Silahkan Register
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
