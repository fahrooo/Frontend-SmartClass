import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
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
      setMsgErrorNik("NIK harus diisi");
    } else if (focusNik === true && nik.length < 16) {
      setIsErrorNik(true);
      setMsgErrorNik("NIK harus 16 angka");
    } else {
      setIsErrorNik(false);
      setMsgErrorNik("");
    }
  }, [nama, nik, unit, focusNik]);

  const isErrorNama = focusNama === true && nama === "";
  const isErrorUnit = focusUnit === true && unit === "";

  const handleLanjut = () => {
    setFormRegister(false);
  };

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
        <form onSubmit={handleLanjut}>
          <Box>
            <FormControl isInvalid={isErrorNama}>
              <FormLabel fontSize="15px" color="#FFFFFF" fontWeight="400">
                Nama Lengkap
              </FormLabel>
              <Tooltip
                label="Nama Lengkap harus diisi"
                placement="bottom-end"
                bg="red.600"
                isOpen={isErrorNama}
              >
                <Input
                  variant="flushed"
                  type="text"
                  h="35px"
                  color="#FFFFFF"
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
                  variant="flushed"
                  type="number"
                  h="35px"
                  color="#FFFFFF"
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
                label="Unit harus diisi"
                placement="bottom-end"
                bg="red.600"
                isOpen={isErrorUnit}
              >
                <Select
                  variant="flushed"
                  h="35px"
                  color={unit != "" ? "#FFFFFF" : "#718096"}
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                  onBlur={() => {
                    setFocusUnit(true);
                  }}
                >
                  <option value="" style={{ color: "white", backgroundColor: "#4A5568", width: "200px" }} selected>
                    Select Unit
                  </option>
                  <option value="1" style={{ color: "white", backgroundColor: "#4A5568" }}>
                    Divisi Teknologi Informasi
                  </option>
                  <option value="2" style={{ color: "white", backgroundColor: "#4A5568" }}>
                    Divisi Alat Berat
                  </option>
                  <option value="3" style={{ color: "white", backgroundColor: "#4A5568" }}>
                    Divisi Kendaraan Khusus
                  </option>
                </Select>
              </Tooltip>
            </FormControl>
          </Box>
          <Box w="100%" mt="20px" display="flex" justifyContent="end">
            <Button
              type="submit"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="messenger"
              variant="solid"
              isDisabled={disabled}
            >
              Lanjut
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

export default FormRegister1;
