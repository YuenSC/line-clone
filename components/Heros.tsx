// http://css3.bradshawenterprises.com/cfimg/
// https://developer.mozilla.org/en-US/docs/Web/CSS/animation

/**
 * a = presentation time of one image
 * b = duration of cross fading
 * n = number of image
 * t = (a+b) * n = Total animation time
 *
 * 0%
 * a/t*100%        In the animation of n image cross-fading (t second), one image should have a/t percent of time
 * (a+b)/t*100% = 1/n*100%
 * 100%-(b/t*100%)
 * 100%
 *
 *
 * Key to understand the keyframe
 * a = 4
 * b = 1
 * n = 2
 * => t = (4+1)*2 = 10
 * 0%
 * 40%
 * 50%
 * 90%
 * 100%
 *                                t second
 * |---------------------------------------------------------------|
 * |---------------|---------------|---------------|---------------|
 *     a+b second       a+b second    a+b second      a+b second
 * 0       a      a+b                                       100-b (cross fade with the last one)
 *
 * Each delay = a+b second
 *
 */

import {
  Box,
  BoxProps,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  LinkProps,
  Stack,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import iconLine from "../public/icon-line-w.png";
import mv01 from "../public/mv01.jpeg";
import mv02 from "../public/mv02.jpeg";
import {
  SpirteIcon,
  SpriteIndex,
  spriteDownloadListStyle,
} from "../util/sprite";

const crossFading = keyframes`
 0% { opacity : 1}
 40% { opacity : 1}
 50% { opacity : 0; transform : scale(1.25)}
 90% { opacity : 0; transform : scale(1.55)}
 100% { opacity : 1}
`;

const movingDown = keyframes`
  from  {transform: translateY(0);}
  to  {transform: translateY(-15px);}
`;

const scaleScrollLine = keyframes`
  from  {height : 0}
  to  {transform: translateY(100%); height : 100px}
`;

const Heros = () => {
  const images = [mv01, mv02];
  const [isAtTheTop, setIsAtTheTop] = useState(true);

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      setIsAtTheTop(scrollY === 0);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <Box minH={{ base: "60vh", lg: "100vh" }} pos="relative">
      {/* Title In Large Screen */}
      <VStack
        display={isAtTheTop ? "none" : "flex"}
        textAlign={"center"}
        pos="absolute"
        top={{ base: "50%", lg: "70%" }}
        left="50%"
        transform={"translateX(-50%)"}
        zIndex={"banner"}
        w="90%"
        spacing={{ base: "14", lg: "2" }}
      >
        <Heading
          fontWeight={"black"}
          fontSize={{ base: "4xl", lg: "7xl" }}
          color={{ base: "white", lg: "black" }}
        >
          Life on LINE
        </Heading>
        <Text fontSize={{ base: "sm", lg: "lg" }} lineHeight="7">
          More than just a messenger app. LINE is new level of communication,
          and the very infrastructure of your life.
        </Text>
      </VStack>

      {/* Title In Small Screen */}

      {/* Main Hero */}
      <Box
        w={"100%"}
        minW={{ base: "0", lg: "container.xl" }}
        h={{ base: "500px", lg: "100vh" }}
        pos={"relative"}
        overflow="hidden"
        clipPath={
          isAtTheTop
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%);"
            : {
                base: "polygon(0% 40%, 100% 40%, 100% 66%, 0% 66%);",
                lg: "polygon(10% 31%, 90% 31%, 90% 66%, 10% 66%);",
              }
        }
        transition={"clip-path 0.2s"}
      >
        {/* Heading */}
        <Stack
          pos="absolute"
          top={{ base: "70%", lg: "50%" }}
          left={{ base: "30px", lg: "10%" }}
          transform="translate(0%, -50%)"
          spacing={{ base: 0, lg: 8 }}
          color={"white"}
          opacity={isAtTheTop ? 1 : 0}
          pointerEvents={isAtTheTop ? "unset" : "none"}
        >
          <Heading
            fontSize={{ base: "50px", lg: "140px" }}
            whiteSpace="nowrap"
            fontWeight="bold"
            fontFamily="Nunito"
            ml="-8px"
          >
            Life on LINE
          </Heading>
          <Heading fontFamily="Nunito" fontSize={{ base: "lg", lg: "3xl" }}>
            LINE—always at your side
          </Heading>

          {/* Download In small screen */}
          <Box pt={10} display={{ base: "block", lg: "none" }}>
            <Button variant={"outline"} w="fit-content">
              <HStack>
                <Image src={iconLine} alt="Line Icon" />
                <Text>Download</Text>
              </HStack>
            </Button>
          </Box>

          {/* Download In large screen */}
          <Stack spacing={4} display={{ base: "none", lg: "flex" }}>
            <HStack>
              <Image src={iconLine} alt="Line Icon" />
              <Text>Download</Text>
            </HStack>
            <HStack>
              <SquareDownloadButton
                spriteIndex={SpriteIndex.appStoreWhite}
                href={"https://line.me/en/"}
              />
              <SquareDownloadButton
                spriteIndex={SpriteIndex.playStoreWhite}
                href={"https://line.me/en/"}
              />
              <SquareDownloadButton
                spriteIndex={SpriteIndex.pcWhite}
                href={"https://line.me/en/"}
              />
            </HStack>
          </Stack>
        </Stack>

        {/* Slogan */}

        {/* Moving Line */}
        <Box
          pos="absolute"
          bottom="0"
          left="50%"
          color="white"
          fontSize={"sm"}
          fontWeight="bold"
          // transform="translateY(100px)"
          animation={`${movingDown} 0.9s ease-in-out infinite`}
          display={{ base: "none", lg: "block" }}
          sx={{
            animationDirection: "alternate",
          }}
        >
          <VStack>
            <Text>Scroll</Text>
            <Box minH="100px">
              <Box
                animation={`${scaleScrollLine} 0.9s ease-in-out infinite`}
                h="100px"
                w="2px"
                bgColor={"white"}
              ></Box>
            </Box>
          </VStack>
        </Box>

        {/* Image Background */}
        {images.map((image, index) => {
          return (
            <CrossFadingImage
              key={index}
              src={image}
              zIndex={"-1"}
              transform="scale(1.5)"
              animation={`${crossFading} 10s linear infinite`}
              sx={{
                animationDelay: `${5 * (images.length - (index + 1))}s`,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Heros;

const CrossFadingImage = ({
  src,
  ...rest
}: { src: string | StaticImageData } & BoxProps) => {
  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      filter="brightness(90%)"
      {...rest}
    >
      <Image src={src} alt="Heros" objectFit="cover" layout="fill" />
    </Box>
  );
};

export const SquareDownloadButton = ({
  spriteIndex,
  href,
  ...linkProps
}: {
  spriteIndex: SpriteIndex;
  href: string;
} & LinkProps) => {
  return (
    <NextLink href={href}>
      <Link
        border={"1px solid white"}
        p="3"
        borderRadius={"8px"}
        _hover={{
          bgColor: "lineGreen",
          "&>div": {
            backgroundImage: "url(/downloadIcon.png)",
            backgroundPosition: "5px 5px",
            backgroundSize: "30px 30px",
          },
        }}
        {...linkProps}
      >
        <SpirteIcon spriteIndex={spriteIndex} />
      </Link>
    </NextLink>
  );
};
