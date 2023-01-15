import React, { useState } from "react";
import FormRegister1 from "./FormRegister1";
import FormRegister2 from "./FormRegister2";

const Register = ({ setForm }) => {
  const [formRegister, setFormRegister] = useState(true);
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState(0);
  const [unit, setUnit] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  console.log(nama, nik, unit, email, password, confPassword);

  return formRegister ? (
    <FormRegister1
      setForm={setForm}
      setFormRegister={setFormRegister}
      setNama={setNama}
      setNik={setNik}
      setUnit={setUnit}
    />
  ) : (
    <FormRegister2
      setForm={setForm}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfPassword={setConfPassword}
    />
  );
};

export default Register;
