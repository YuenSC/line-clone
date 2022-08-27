import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import Heros from "../components/Heros";
import messengerAppIcon1 from "../public/messengerAppIcon1.png";
import messengerAppPic1 from "../public/messengerAppPic1.png";

interface Service {
  title: string;
  iconSrc: StaticImageData;
  abstract: ReactNode;
  description: string;
  href: string;
  imageSrc: StaticImageData;
}

const services = [
  {
    title: "LINE NEWS",
    abstract: (
      <span>
        Keep current with <br />
        the latest news on LINE.
      </span>
    ),
    description:
      "LINE NEWS is the most popular news content curation service in Asia and aims to deliver valuable content that enrich your everyday life.",
    href: "https://news.line.me/about/",
    iconSrc: messengerAppIcon1,
    imageSrc: messengerAppPic1,
  },
] as Service[];

const LifeOnLine = () => {
  return (
    <Box id="lifeOnLine" w="100%" minH="100vh">
      <Heros />
      {services.map((service) => (
        <ServiceItem key={service.title} service={service} />
      ))}
    </Box>
  );
};

export default LifeOnLine;

const ServiceItem = ({ service }: { service: Service }) => {
  return (
    <Flex align={"center"}>
      {/* Image */}
      <Image alt={"Image of " + service.title} src={service.imageSrc} />
      {/* Text */}
      <Stack w={"40%"}>
        <Image alt={"Image of " + service.title} src={service.imageSrc} />

        <Heading>{service.title}</Heading>
        <Text color={"green"}>{service.abstract}</Text>
        <Text color={"gray.400"}>{service.description}</Text>
        <Link href={service.href}>More Detail</Link>
      </Stack>
    </Flex>
  );
};
