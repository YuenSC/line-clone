import { Box, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import banner from "../public/banner.png";

const CorporateServices = () => {
  return (
    <LinkBox w="100%" minW="container.xl" pos="relative" h="275px">
      <Image
        src={banner}
        alt={"Corporate services"}
        layout="fill"
        objectFit="cover"
      />
      <LinkOverlay href="https://www.linebiz.com/jp-en/" target={"_blank"}>
        <Heading
          pos="absolute"
          top={"50%"}
          left={"50%"}
          transform="translateX(-50%) translateY(-50%)"
          color={"white"}
          fontWeight="black"
          fontSize={"5xl"}
        >
          Corporate services
        </Heading>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CorporateServices;
