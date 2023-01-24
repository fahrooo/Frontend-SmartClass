import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import FormRegister1 from "./FormRegister1";
import FormRegister2 from "./FormRegister2";
import { useRouter } from "next/router";
import useActionGlobal from "@/store/UseActionGlobal";

const Register = ({ setForm }) => {
  const toast = useToast();

  const updateEmail = useActionGlobal((state) => state.updateEmail);

  const [formRegister, setFormRegister] = useState(true);
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [unit, setUnit] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setDisabled(true);
      const data = await axios.post("http://localhost:5000/register", {
        nama,
        nik,
        unit,
        email,
        password,
        confPassword,
      });
      if (
        data.data.status === 200 &&
        data.data.message === "Silahkan verifikasi email"
      ) {
        setIsLoading(false);
        setDisabled(false);
        localStorage.setItem("email", JSON.stringify([email]));
        router.push("/verifyemail");
        toast({
          title: "Verifikasi Email!",
          description: data.data.message,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
      if (
        data.data.status === 400 &&
        data.data.message === "NIK already exist"
      ) {
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Registrasi Gagal!",
          description: "NIK sudah ada",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
      if (
        data.data.status === 400 &&
        data.data.message === "Email already exist"
      ) {
        setIsLoading(false);
        setDisabled(false);
        toast({
          title: "Registrasi Gagal!",
          description: "Email sudah ada",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      setDisabled(false);
      setIsLoading(false);
    }
  };

  return formRegister ? (
    <FormRegister1
      setForm={setForm}
      setFormRegister={setFormRegister}
      setNama={setNama}
      nama={nama}
      setNik={setNik}
      nik={nik}
      setUnit={setUnit}
      unit={unit}
    />
  ) : (
    <FormRegister2
      setForm={setForm}
      setFormRegister={setFormRegister}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      setConfPassword={setConfPassword}
      confPassword={confPassword}
      isLoading={isLoading}
      handleRegister={handleRegister}
      disabled={disabled}
      setDisabled={setDisabled}
    />
  );
};

export default Register;
