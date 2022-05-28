// http://css3.bradshawenterprises.com/cfimg/

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
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

import iconLine from "../public/icon-line-w.png";
import mv01 from "../public/mv01.jpeg";
import mv02 from "../public/mv02.jpeg";

const crossFading = keyframes`
 0% { opacity : 1}
 40% { opacity : 1}
 50% { opacity : 0; transform : scale(1.25)}
 90% { opacity : 0; transform : scale(1.55)}
 100% { opacity : 1}
`;

const Heros = () => {
  const images = [mv01, mv02];

  return (
    <Center h="100vh" w="100%" pos={"relative"} overflow="hidden">
      <Container color={"white"} maxW="container.lg" transition={"all 0.5s"}>
        <Heading fontSize={"9xl"} fontWeight="bold" fontFamily="Nunito">
          Life on LINE
        </Heading>
        <Heading fontFamily="Nunito" pl="2">
          LINE—always at your side
        </Heading>
        <Stack>
          <HStack>
            <Image src={iconLine} alt="Line Icon" />
            <Text>Download</Text>
          </HStack>
          <HStack>
            {/* <SquareDownloadButton icon={} href={} />
            <SquareDownloadButton icon={} href={} />
            <SquareDownloadButton icon={} href={} /> */}
          </HStack>
        </Stack>
      </Container>
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
