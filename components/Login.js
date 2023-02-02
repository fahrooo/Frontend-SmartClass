/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { GrMail } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = ({ setForm }) => {
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [msgErrorEmail, setMsgErrorEmail] = useState("");
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [msgErrorPassword, setMsgErrorPassword] = useState("");

  const isEmail = validator.isEmail(email);

  useEffect(() => {
    Cookies.remove("email");
    Cookies.remove("_verified");
    Cookies.remove("_forgot");
    Cookies.remove("isLogin");

    if (email != "" && isEmail == true && password != "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (focusEmail === true && email === "") {
      setIsErrorEmail(true);
      setMsgErrorEmail("Email harus diisi");
    } else if (focusEmail === true && isEmail == false) {
      setIsErrorEmail(true);
      setMsgErrorEmail("Email tidak valid");
    } else {
      setIsErrorEmail(false);
      setMsgErrorEmail("");
    }

    if (focusPassword === true && password === "") {
      setIsErrorPassword(true);
      setMsgErrorPassword("Password harus diisi");
    } else {
      setIsErrorPassword(false);
      setMsgErrorPassword("");
    }
  }, [email, focusEmail, isEmail, focusPassword, password]);

  const toast = useToast();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setDisabled(true);
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (
        result.data.status === 404 &&
        result.data.message === "Email not found"
      ) {
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Email Tidak Terdaftar",
          description: "Silahkan lakukan registrasi",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }

      if (
        result.data.status === 400 &&
        result.data.message === "Email is not verified"
      ) {
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Email Belum Terverifikasi",
          description: "Silahkan cek email anda untuk verifikasi email",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        try {
          axios
            .post("http://localhost:5000/sendverifyemail", {
              email,
            })
            .then((res) => {
              if (
                res.data.status === 200 &&
                res.data.message === "Email sent successfully"
              ) {
                Cookies.set("email", email);
                router.push("/verifyemail");
              } else {
                toast({
                  title: "Email Verifikasi Gagal Terkirim",
                  description: "Silahkan lakukan kembali verifikasi email",
                  status: "error",
                  duration: 5000,
                  position: "top",
                  isClosable: true,
                });
              }
            });
        } catch (error) {
          toast({
            title: "Gagal",
            description: error.message,
            status: "error",
            duration: 5000,
            position: "top",
            isClosable: true,
          });
        }
      }

      if (
        result.data.status === 400 &&
        result.data.message === "Wrong Password"
      ) {
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Login Gagal!",
          description: "Email atau password salah",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }

      if (
        result.data.status === 200 &&
        result.data.message === "Berhasil Login"
      ) {
        Cookies.set("nama", result.data.data?.nama, { expires: 1 });
        Cookies.set("email", result.data.data?.email, { expires: 1 });
        Cookies.set("unit", result.data.data?.unit, { expires: 1 });
        Cookies.set("role", result.data.data?.role, { expires: 1 });
        Cookies.set("isLogin", true, { expires: 1 });
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Login Berhasil!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      setDisabled(false);
      setIsLoading(false);
    }
  };

  return (
    <Box
      w="350px"
      h="max-content"
      bgColor="#393D43"
      borderRadius="40px"
      py="5px"
    >
      <Box display="flex" justifyContent="center">
        <Text fontSize="27px" color="#FFFFFF" mt="33px" fontWeight="700">
          Login
        </Text>
      </Box>
      <Box m="25px">
        <form onSubmit={handleLogin}>
          <Box>
            <FormControl isInvalid={isErrorEmail}>
              <Tooltip
                label={msgErrorEmail}
                placement="bottom-end"
                bg="red.600"
                isOpen={isErrorEmail}
              >
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onBlur={() => {
                      setFocusEmail(true);
                    }}
                  />
                </InputGroup>
              </Tooltip>
            </FormControl>
          </Box>
          <Box mt="20px">
            <FormControl isInvalid={isErrorPassword}>
              <Tooltip
                label={msgErrorPassword}
                placement="bottom-end"
                bg="red.600"
                isOpen={isErrorPassword}
              >
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onBlur={() => {
                      setFocusPassword(true);
                    }}
                  />
                </InputGroup>
              </Tooltip>
            </FormControl>
          </Box>
          <Box mt="20px" display="flex" justifyContent="end">
            <Text fontSize="13px" color="#FFFFFF">
              <Link
                onClick={() => {
                  router.push("/forgotpassword");
                }}
              >
                Lupa Password?
              </Link>
            </Text>
          </Box>
          <Box w="100%" mt="20px">
            <Button
              type="submit"
              w="100%"
              colorScheme="messenger"
              disabled={disabled}
              isLoading={isLoading}
            >
              Login
            </Button>
          </Box>
        </form>
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
