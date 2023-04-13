import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import DashboardBottombarItem from "./DashboardBottombarItem";

const DashboardBottomBar = ({ items }) => {
  const { pathname } = useRouter();
  return (
    <Box
      position="fixed"
      bottom="0"
      zIndex="50"
      height="14"
      w="100%"
      bgColor="#445359FA"
      visibility={{ base: "visible", md: "hidden" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
      borderTopStartRadius="15px"
      borderTopEndRadius="15px"
    >
      <SimpleGrid columns={5} spacing={10}>
        {items?.map((item, index) => (
          <DashboardBottombarItem key={index} item={item} pathname={pathname} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DashboardBottomBar;
