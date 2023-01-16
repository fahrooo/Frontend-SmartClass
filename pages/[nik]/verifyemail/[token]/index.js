/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = () => {
  const router = useRouter();
  const { nik, token } = router.query;

  useEffect(() => {
    const data = axios.get(`http://localhost:5000/${nik}/verifyemail/${token}`);
    console.log(data);
    // if (data.data.status === 201 && data.data.message === "Register Berhasil") {
    //   router.push("/");
    // }
  });

  return <div>HAI</div>;
};

export default index;
