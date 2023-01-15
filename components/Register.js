import React, { useState } from "react";
import FormRegister1 from "./FormRegister1";
import FormRegister2 from "./FormRegister2";

const Register = ({ setForm }) => {
  const [formRegister, setFormRegister] = useState(true);
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [unit, setUnit] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  console.log(nama, nik, unit, email, password, confPassword);

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
    />
  );
};

export default Register;
