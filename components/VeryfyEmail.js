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
import { TbSend } from "react-icons/tb";

const VeryfyEmail = () => {
  return (
    <Box w="350px" h="max-content" bgColor="#393D43" borderRadius="40px" p="20px">
      <Stack direction="column" alignItems="center">
        <Box>
          <Icon as={TbSend} w={"36"} h={"36"} color="#FFFFFF" />
        </Box>
        <Box>
          <Text fontSize="27px" color="#FFFFFF" fontWeight="700">
            Konfirmasi Email
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" color="#FFFFFF">
            Kami telah mengirimkan link aktivasi akun. Silahkan cek email anda
            untuk verifikasi, Terimakasih.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default VeryfyEmail;
