import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import lineIcon from "../public/icon-line.png";
import { SpirteIcon, SpriteIndex } from "../util/sprite";

const Footer = () => {
  const links = [
    {
      label: "App Store",
      href: "https://apps.apple.com/app/line/id443904275",
      icon: SpriteIndex.appStoreBlack,
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=jp.naver.line.android",
      icon: SpriteIndex.windowBlack,
    },
    {
      label: "Desktop",
      href: "https://apps.apple.com/app/line/id539883307",
      icon: SpriteIndex.pcBlack,
    },
  ];
  return (
    <Stack
      maxW={{ base: "none", lg: "container.xl" }}
      mx="auto"
      p="10"
      spacing={8}
    >
      <HStack>
        <Box
          borderRadius={"10px"}
          overflow="hidden"
          pos="relative"
          w="40px"
          h="40px"
        >
          <Image src={lineIcon} alt="icon" layout="fill" objectFit="fill" />
        </Box>

        {links.map((link, index) => {
          const isLast = index === links.length - 1;
          return (
            <Flex align={"center"} key={link.label}>
              {link.icon && (
                <SpirteIcon spriteIndex={link.icon} transform="scale(0.8)" />
              )}
              <Link target={"_blank"} href={link.href} fontSize="sm">
                {link.label}
              </Link>
              {!isLast && (
                <Divider
                  orientation="vertical"
                  borderColor={"gray.500"}
                  h="20px"
                  ml="10px"
                />
              )}
            </Flex>
          );
        })}
      </HStack>
    </Stack>
  );
};

export default Footer;
