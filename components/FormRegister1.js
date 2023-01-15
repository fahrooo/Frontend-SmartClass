import { ArrowForwardIcon } from "@chakra-ui/icons";
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

const FormRegister1 = ({ setForm, setFormRegister, setNama, setNik, setUnit }) => {
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
              onChange={(e) => {
                setNama(e.target.value);
              }}
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
              onChange={(e) => {
                setNik(e.target.value);
              }}
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
              onChange={(e) => {
                setUnit(e.target.value);
              }}
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

export default FormRegister1;
