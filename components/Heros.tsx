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
  Center,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import React from "react";

import iconLine from "../public/icon-line-w.png";
import mv01 from "../public/mv01.jpeg";
import mv02 from "../public/mv02.jpeg";
import { SpriteIndex, spriteDownloadListStyle } from "../util/constant/sprite";

const crossFading = keyframes`
 0% { opacity : 1}
 40% { opacity : 1}
 50% { opacity : 0; transform : scale(1.25)}
 90% { opacity : 0; transform : scale(1.55)}
 100% { opacity : 1}
`;

const movingDown = keyframes`
  from  {transform: translateY(0);}
  to  {transform: translateY(-30px);}
`;

const Heros = ({ isAtTheTop }: { isAtTheTop: boolean }) => {
  const images = [mv01, mv02];

  return (
    <Center minH="100vh">
      <Box
        minH={"100vh"}
        w={"100%"}
        pos={"relative"}
        overflow="hidden"
        clipPath={
          isAtTheTop
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%);"
            : "polygon(10% 31%, 90% 31%, 90% 66%, 10% 66%);"
        }
        transition={"clip-path 0.2s"}
      >
        {/* Heading */}
        <Stack
          pos="absolute"
          top="50%"
          left="10%"
          transform="translate(0%, -50%)"
          spacing={8}
          color={"white"}
          opacity={isAtTheTop ? 1 : 0}
          pointerEvents={isAtTheTop ? "unset" : "none"}
          transition={"all 0.5s"}
        >
          <Heading
            fontSize={"140px"}
            whiteSpace="nowrap"
            fontWeight="bold"
            fontFamily="Nunito"
            ml="-8px"
          >
            Life on LINE
          </Heading>
          <Heading fontFamily="Nunito">LINE???always at your side</Heading>
          <Stack spacing={4}>
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

        {/* Moving Line */}
        <Box
          pos="absolute"
          bottom="20%"
          left="50%"
          color="white"
          fontSize={"sm"}
          fontWeight="bold"
          // transform="translateY(100px)"
          animation={`${movingDown} 1s ease-in-out infinite`}
          sx={{
            animationDirection: "alternate",
          }}
        >
          Scroll
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
    </Center>
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

const SquareDownloadButton = ({
  spriteIndex,
  href,
}: {
  spriteIndex: SpriteIndex;
  href: string;
}) => {
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
      >
        <Box {...spriteDownloadListStyle[spriteIndex]} />
      </Link>
    </NextLink>
  );
};
