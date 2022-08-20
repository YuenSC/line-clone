import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { hasWindow } from "../util/constants";

const Navbar = () => {
  const links = [
    {
      label: "Life on LINE",
      id: "lifeOnLine",
    },
    {
      label: "Messenger APP",
      id: "messengerApp",
    },
    {
      label: "Services",
      id: "services",
    },
  ];

  return (
    <HStack
      pos="absolute"
      top={0}
      zIndex="sticky"
      bgColor="rgba(255, 255, 255, 0.8)"
      w="100%"
      justifyContent={"space-between"}
      h="75px"
    >
      <Link href={"/"} passHref>
        <a>Line</a>
      </Link>
      <HStack spacing={10}>
        {links.map(({ id, label }) => {
          const element = hasWindow
            ? window?.document?.getElementById(id)
            : undefined;
          console.log("element :>> ", element);
          return (
            <Stack
              key={id}
              spacing={0}
              onClick={() => {
                if (element) {
                  element.scrollIntoView();
                }
              }}
            >
              <Text>{label}</Text>
              <Box w="100%" h="7px" bgColor={"black"}></Box>
            </Stack>
          );
        })}
      </HStack>
      <Link href={"/"} passHref>
        <a>Line</a>
      </Link>
    </HStack>
  );
};

export default Navbar;
