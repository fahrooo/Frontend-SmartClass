import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Login = ({ setForm }) => {
  return (
    <Box w="350px" h="440px" bgColor="#393D43" borderRadius="40px">
      <Box display="flex" justifyContent="center">
        <Text fontSize="27px" color="#FFFFFF" mt="33px" fontWeight="700">
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
          <Text fontSize="13px" color="#FFFFFF">
            <Link href="#">Lupa Password?</Link>
          </Text>
        </Box>
        <Box w="100%" mt="20px">
          <Button w="100%" colorScheme="messenger">
            Log In
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
