/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import useRemoteUnits from "@/components/hooks/useRemoteUnits";
import { Box, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const toast = useToast();

  const { data } = useRemoteUnits();
  console.log(data);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.delete("http://localhost:5000/logout");
      console.log(result.data.status, result.data.message);

      if (
        result.data.status === 200 &&
        result.data.message === "Clear Token Successful"
      ) {
        Cookies.remove("nama");
        Cookies.remove("email");
        Cookies.remove("unit");
        Cookies.remove("role");
        Cookies.remove("isLogin");

        toast({
          title: "Logout Berhasil!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout />
    // <Box>
    //   <Button colorScheme={"red"} onClick={handleLogout}>
    //     Logout
    //   </Button>
    //   {data?.data.map((unit, i) => (
    //     <Box key={i}>{unit.nama}</Box>
    //   ))}
    // </Box>
  );
};

export default index;
