import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const FormRegister2 = ({
  setForm,
  setEmail,
  setPassword,
  setConfPassword,
  email,
  password,
  confPassword,
  isLoading,
  handleRegister,
}) => {
  const [disabled, setDisabled] = useState(true);

  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusConfPassword, setFocusConfPassword] = useState(false);

  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [msgErrorPassword, setMsgErrorPassword] = useState("");
  const [isErrorConfPassword, setIsErrorConfPassword] = useState(false);
  const [msgErrorConfPassword, setMsgErrorConfPassword] = useState("");

  useEffect(() => {
    if (
      email != "" &&
      password != "" &&
      confPassword != "" &&
      password.length >= 8 &&
      confPassword == password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (focusPassword === true && password === "") {
      setIsErrorPassword(true);
      setMsgErrorPassword("Password is required");
    } else if (focusPassword === true && password.length < 8) {
      setIsErrorPassword(true);
      setMsgErrorPassword("Password must be at least 8 characters");
    } else {
      setIsErrorPassword(false);
      setMsgErrorPassword("");
    }

    if (focusConfPassword === true && confPassword === "") {
      setIsErrorConfPassword(true);
      setMsgErrorConfPassword("Confirm Password is required");
    } else if (focusConfPassword === true && confPassword != password) {
      setIsErrorConfPassword(true);
      setMsgErrorConfPassword("Confirm Password not match password");
    } else {
      setIsErrorConfPassword(false);
      setMsgErrorConfPassword("");
    }
  }, [email, password, confPassword, focusPassword, focusConfPassword]);

  const isErrorEmail = focusEmail === true && email === "";
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
        <Box>
          <FormControl isInvalid={isErrorEmail}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              Email
            </FormLabel>
            <Tooltip
              label="Email is required"
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorEmail}
            >
              <Input
                type="email"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => {
                  setFocusEmail(true);
                }}
              />
            </Tooltip>
          </FormControl>
        </Box>
        <Box mt="15px">
          <FormControl isInvalid={isErrorPassword}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              Password
            </FormLabel>
            <Tooltip
              label={msgErrorPassword}
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorPassword}
            >
              <Input
                type="password"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={() => {
                  setFocusPassword(true);
                }}
              />
            </Tooltip>
          </FormControl>
        </Box>
        <Box mt="15px">
          <FormControl isInvalid={isErrorConfPassword}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              Confirm Password
            </FormLabel>
            <Tooltip
              label={msgErrorConfPassword}
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorConfPassword}
            >
              <Input
                type="password"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="********"
                value={confPassword}
                onChange={(e) => {
                  setConfPassword(e.target.value);
                }}
                onBlur={() => {
                  setFocusConfPassword(true);
                }}
              />
            </Tooltip>
          </FormControl>
        </Box>
        <Box w="100%" mt="20px">
          <Button
            w="100%"
            colorScheme="messenger"
            disabled={disabled}
            isLoading={isLoading}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
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
