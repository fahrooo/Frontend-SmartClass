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
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbSend } from "react-icons/tb";

const VeryfyEmail = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailLocal = JSON.parse(localStorage.getItem("email"));
    if (emailLocal) {
      setEmail(emailLocal);
    } else {
      router.push("/sendverifyemail");
    }
    const checkVerifiyemail = axios
      .post("http://localhost:5000/checkverifyemail", {
        email,
      })
      .then((res) => {
        if (res.data.status === 200 && res.data.message === "Email verified") {
          localStorage.removeItem("email");
          router.push("/aktivasiakun");
        }
      });
  }, [router, email]);
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
          <Icon as={TbSend} w={"24"} h={"24"} color="#FFFFFF" />
        </Box>
        <Box>
          <Text fontSize="27px" color="#FFFFFF" fontWeight="700">
            Konfirmasi Email
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="13px" color="#FFFFFF" mt="10px">
            Kami telah mengirimkan link aktivasi akun ke email {email}
          </Text>
          <Text textAlign="center" fontSize="13px" color="#FFFFFF">
            Silahkan cek email anda untuk verifikasi, Terimakasih.
          </Text>
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
      </Stack>
    </Box>
  );
};

export default VeryfyEmail;
