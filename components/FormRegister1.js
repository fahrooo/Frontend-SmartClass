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
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const FormRegister1 = ({
  setForm,
  setFormRegister,
  setNama,
  setNik,
  setUnit,
  nama,
  nik,
  unit,
}) => {
  const [disabled, setDisabled] = useState(true);

  const [focusNama, setFocusNama] = useState(false);
  const [focusNik, setFocusNik] = useState(false);
  const [focusUnit, setFocusUnit] = useState(false);

  const [isErrorNik, setIsErrorNik] = useState(false);
  const [msgErrorNik, setMsgErrorNik] = useState("");

  useEffect(() => {
    if (nama != "" && nik != "" && unit != "" && nik.length >= 16) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    if (focusNik === true && nik === "") {
      setIsErrorNik(true);
      setMsgErrorNik("NIK is required");
    } else if (focusNik === true && nik.length < 16) {
      setIsErrorNik(true);
      setMsgErrorNik("NIK must be at least 16 number");
    } else {
      setIsErrorNik(false);
      setMsgErrorNik("");
    }
  }, [nama, nik, unit, focusNik]);

  const isErrorNama = focusNama === true && nama === "";
  const isErrorUnit = focusUnit === true && unit === "";

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
      <Box mx="25px" mt="10px">
        <Box>
          <FormControl isInvalid={isErrorNama}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              Nama Lengkap
            </FormLabel>
            <Tooltip
              label="Nama Lengkap is required"
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorNama}
            >
              <Input
                type="text"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="Nama Lengkap"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                onBlur={() => {
                  setFocusNama(true);
                }}
              />
            </Tooltip>
          </FormControl>
        </Box>
        <Box mt="15px">
          <FormControl isInvalid={isErrorNik}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              NIK
            </FormLabel>
            <Tooltip
              label={msgErrorNik}
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorNik}
            >
              <Input
                type="number"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="NIK"
                value={nik}
                onChange={(e) => {
                  setNik(e.target.value);
                }}
                onBlur={() => {
                  setFocusNik(true);
                }}
              />
            </Tooltip>
          </FormControl>
        </Box>
        <Box mt="15px">
          <FormControl isInvalid={isErrorUnit}>
            <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
              Unit
            </FormLabel>
            <Tooltip
              label="Unit is required"
              placement="bottom-end"
              bg="red.600"
              isOpen={isErrorUnit}
            >
              <Input
                type="text"
                h="35px"
                bgColor="#D9D9D9"
                borderRadius="15px"
                placeholder="Unit"
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                }}
                onBlur={() => {
                  setFocusUnit(true);
                }}
              />
            </Tooltip>
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
            isDisabled={disabled}
          >
            Lanjut
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

export default FormRegister1;
