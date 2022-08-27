import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Link as ChakraLink,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";

import icon from "../public/icon-title-pc.png";
import { hasWindow } from "../util/constants";

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

const Navbar = () => {
  const [currentLinkId, setCurrentLink] = useState("");

  const isUpdateUnderline = useRef(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      const sections = links.map(({ id }) =>
        window.document.getElementById(id)
      );

      sections.forEach((section) => {
        if (!section) return;
        const { offsetTop, scrollHeight, id } = section;
        const start = offsetTop;
        const end = offsetTop + scrollHeight;
        const inRnage = scrollY >= start && scrollY < end;

        /**
         * If click, isUpdateUnderline = true
         * when scroll, passing differnt section in range
         * only when in range section id === currentLinkId, set isUpdateUnderline=false
         */

        if (scrollY >= start && scrollY < end) {
          if (currentLinkId !== id) {
            if (isUpdateUnderline.current) return;
            setCurrentLink(id ?? "");
            return;
          } else {
            isUpdateUnderline.current = false;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [currentLinkId]);

  return (
    <HStack
      pos="fixed"
      top={0}
      zIndex="sticky"
      bgColor="rgba(255, 255, 255, 0.9)"
      w="100%"
      justifyContent={"space-between"}
      h="75px"
      borderBottom={"1px solid"}
      borderColor="gray.300"
    >
      <Link href={"/"} passHref>
        <a style={{ marginLeft: 20 }}>
          <Image src={icon} alt="Line Logo" />
        </a>
      </Link>
      <HStack spacing={10}>
        {links.map(({ id, label }) => {
          const element = hasWindow
            ? window?.document?.getElementById(id)
            : undefined;

          const isCurrentLink = id === currentLinkId;
          return (
            <Stack
              key={id}
              spacing={0}
              onClick={() => {
                console.log("element", element);
                if (element) {
                  setCurrentLink(element.id);
                  isUpdateUnderline.current = true;
                  element.scrollIntoView();
                }
              }}
            >
              <Text cursor={"pointer"} fontWeight={"bold"}>
                {label}
              </Text>
              {isCurrentLink && (
                <Box
                  as={motion.div}
                  layoutId="underline"
                  w="100%"
                  h="3px"
                  bgColor={"black"}
                ></Box>
              )}{" "}
            </Stack>
          );
        })}
      </HStack>

      <Box pr={4}>
        <Menu placement="bottom">
          <MenuButton
            as={Button}
            variant="unstyled"
            outline={"none"}
            _active={{ outline: "none" }}
            _focus={{ outline: "none" }}
          >
            <HStack spacing={2} whiteSpace="nowrap">
              <Icon as={BsGlobe} />
              <Text>EN</Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>
          <MenuList w="50px" minW="0px">
            <MenuItem>EN</MenuItem>
            <MenuItem>ZH</MenuItem>
            <MenuItem>CN</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
