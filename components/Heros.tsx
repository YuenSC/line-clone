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

import { Box, BoxProps, chakra, keyframes } from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

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
    <Box h="100vh" w="100vw" pos={"relative"} overflow="hidden">
      {images.map((image, index) => {
        return (
          <CrossFadingImage
            key={index}
            zIndex={index}
            src={image}
            transform="scale(1.5)"
            animation={`${crossFading} 10s linear infinite`}
            sx={{
              animationDelay: `${5 * (images.length - (index + 1))}s`,
            }}
          />
        );
      })}
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
