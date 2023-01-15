import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import FormRegister1 from "./FormRegister1";
import FormRegister2 from "./FormRegister2";

const Register = ({ setForm }) => {
  const toast = useToast();

  const [formRegister, setFormRegister] = useState(true);
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [unit, setUnit] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post("http://localhost:5000/register", {
        nama,
        nik,
        unit,
        email,
        password,
        confPassword,
      });
      setIsLoading(false);
      setForm(true);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
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
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      setConfPassword={setConfPassword}
      confPassword={confPassword}
      isLoading={isLoading}
      handleRegister={handleRegister}
    />
  );
};

export default Register;
