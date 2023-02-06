import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { Text } from "@chakra-ui/react";
import React from "react";

const UserDashboard = () => {
  return <Text color="white">UserDashboard</Text>;
};

UserDashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default UserDashboard;
