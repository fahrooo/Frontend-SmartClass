import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
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
import React, { useState } from "react";

const Register = ({ setForm }) => {
  const [formRegister, setFormRegister] = useState(true);
  return (
    <Box w="350px" h="450px" bgColor="#393D43" borderRadius="40px">
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
      <Box mx="25px" mt="10px">
        {formRegister ? (
          <>
            <Box>
              <FormControl>
                <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                  Nama
                </FormLabel>
                <Input
                  type="text"
                  h="35px"
                  bgColor="#D9D9D9"
                  borderRadius="15px"
                  placeholder="Nama Lengkap"
                />
              </FormControl>
            </Box>
            <Box mt="10px">
              <FormControl>
                <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                  NIK
                </FormLabel>
                <Input
                  type="number"
                  h="35px"
                  bgColor="#D9D9D9"
                  borderRadius="15px"
                  placeholder="NIK"
                />
              </FormControl>
            </Box>
            <Box mt="10px">
              <FormControl>
                <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                  Unit
                </FormLabel>
                <Input
                  type="text"
                  h="35px"
                  bgColor="#D9D9D9"
                  borderRadius="15px"
                  placeholder="Unit"
                />
              </FormControl>
            </Box>
            <Box w="100%" mt="20px" display="flex" justifyContent="end">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="messenger"
                variant="solid"
                onClick={() => {
                  setFormRegister(false);
                }}
              >
                Lanjut
              </Button>
            </Box>
          </>
        ) : (
          <>
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
            <Box mt="10px">
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
            <Box mt="10px">
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
                />
              </FormControl>
            </Box>
            <Box w="100%" mt="20px">
              <Button w="100%" colorScheme="messenger">
                Register
              </Button>
            </Box>
          </>
        )}
        <Box mt="20px" display="flex" justifyContent="center">
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

export default Register;
