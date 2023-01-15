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

const FormRegister2 = ({
  setForm,
  setEmail,
  setPassword,
  setConfPassword,
  email,
  password,
  confPassword,
}) => {
  return (
    <Box w="350px" h="465px" bgColor="#393D43" borderRadius="40px">
      <Box display="flex" justifyContent="center">
        <Stack alignItems="center" mt="33px">
          <Text fontSize="27px" color="#FFFFFF" fontWeight="700">
            Register
          </Text>
          <Text fontSize="15px" color="#FFFFFF" mt="0">
            Selamat datang! Silahkan isikan data diri
          </Text>
        </Stack>
      </Box>
      <Box mx="25px" mt="20px">
        <form>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </FormControl>
          </Box>
          <Box mt="15px">
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Box mt="15px">
            <FormControl>
              <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                Confirm Password
              </FormLabel>
              <Input
                type="password"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="********"
                onChange={(e) => {
                  setConfPassword(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Box w="100%" mt="20px">
            <Button type="submit" w="100%" colorScheme="messenger">
              Register
            </Button>
          </Box>
        </form>
        <Box mt="15px" display="flex" justifyContent="center">
          <Text fontSize="13px" color="#FFFFFF">
            Sudah memiliki akun?{" "}
            <Link
              color="#FF9567"
              onClick={() => {
                setForm(true);
              }}
            >
              Silahkan Log In
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FormRegister2;
