import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  Icon,
  Stack,
  HStack,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbSend } from "react-icons/tb";

const VeryfyEmail = () => {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  useEffect(() => {
    const emailLocal = JSON.parse(localStorage.getItem("email"));
    if (emailLocal) {
      setEmail(emailLocal);
    } else {
      router.push("/sendverifyemail");
    }

    if ((otp1 != "", otp2 != "", otp3 != "", otp4 != "")) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [router, otp1, otp2, otp3, otp4]);

  const code_otp = otp1 + otp2 + otp3 + otp4;

  const handleAktivasiAkun = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/verifyemail", {
          email,
          code_otp,
        })
        .then((res) => {
          if (
            res.data.status === 200 &&
            res.data.message === "Aktivasi Berhasil"
          ) {
            localStorage.removeItem("email");
            toast({
              title: "Aktivasi Akun Berhasil!",
              description: "Silahkan melakukan login",
              status: "success",
              duration: 5000,
              position: "top",
              isClosable: true,
            });
            router.push("/aktivasiakun");
          } else {
            toast({
              title: "Aktivasi Akun Gagal!",
              description: "Kode OTP yang anda masukkan salah",
              status: "error",
              duration: 5000,
              position: "top",
              isClosable: true,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      w="350px"
      h="max-content"
      bgColor="#393D43"
      borderRadius="40px"
      p="20px"
    >
      <Stack direction="column" alignItems="center">
        <Box>
          <Text fontSize="27px" color="#FFFFFF" fontWeight="700">
            Masukkan Kode OTP
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="13px" color="#FFFFFF" mt="10px">
            Kami telah mengirimkan kode OTP ke email {email}
          </Text>
        </Box>
        <form onSubmit={handleAktivasiAkun}>
          <Stack direction="column" alignItems="center">
            <Box>
              <HStack mt="10px">
                <PinInput>
                  <PinInputField
                    color="#FFFFFF"
                    onChange={(e) => {
                      setOtp1(e.target.value);
                    }}
                  />
                  <PinInputField
                    color="#FFFFFF"
                    onChange={(e) => {
                      setOtp2(e.target.value);
                    }}
                  />
                  <PinInputField
                    color="#FFFFFF"
                    onChange={(e) => {
                      setOtp3(e.target.value);
                    }}
                  />
                  <PinInputField
                    color="#FFFFFF"
                    onChange={(e) => {
                      setOtp4(e.target.value);
                    }}
                  />
                </PinInput>
              </HStack>
            </Box>
            <Box>
              <Text fontSize="13px" color="#FFFFFF" mt="10px">
                Belum mendapat link aktivasi akun?{" "}
                <Link
                  color="#FF9567"
                  onClick={() => {
                    setForm(false);
                  }}
                >
                  Kirim ulang
                </Link>
              </Text>
            </Box>
            <Box>
              <Button
                mt="10px"
                colorScheme="messenger"
                disabled={disabled}
                type="submit"
              >
                Kirim
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default VeryfyEmail;
