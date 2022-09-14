import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import Heros, { SquareDownloadButton } from "../components/Heros";
import messengerAppIcon1 from "../public/messengerAppIcon1.png";
import messengerAppIcon2 from "../public/messengerAppIcon2.png";
import messengerAppIcon3 from "../public/messengerAppIcon3.png";
import messengerAppIcon4 from "../public/messengerAppIcon4.png";
import messengerAppIcon5 from "../public/messengerAppIcon5.png";
import messengerAppPic1 from "../public/messengerAppPic1.png";
import messengerAppPic2 from "../public/messengerAppPic2.png";
import messengerAppPic3 from "../public/messengerAppPic3.png";
import messengerAppPic4 from "../public/messengerAppPic4.png";
import messengerAppPic5 from "../public/messengerAppPic5.png";
import {
  SpirteIcon,
  SpriteIndex,
  spriteDownloadListStyle,
} from "../util/sprite";

interface Service {
  title: string;
  iconSrc: StaticImageData;
  abstract: ReactNode;
  description: string;
  href: string;
  appStoreHref?: string;
  playStoreHref?: string;
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
  {
    title: "LINE Doctor",
    abstract: "Connect with a doctor, right from the LINE app.",
    description: `LINE Doctor is a telemedicine service that lets users book appointments, speak with a doctor over video call, and pay for consultations on the LINE app.
      Receive medical consultations at home when you don't have time to visit a hospital or want to avoid the crowd.`,
    href: "https://doctor.line.me/",
    iconSrc: messengerAppIcon2,
    imageSrc: messengerAppPic2,
  },
  {
    title: "LINE Pay",
    abstract: (
      <span>
        Easily make <br />
        payments online/offline with LINE Pay.
      </span>
    ),
    description: `LINE Pay is an easy, convenient, and safe payment system. Enjoy freely making payments without your wallet.`,
    href: "https://pay.line.me/portal/jp/main",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.linepaycorp.talaria",
    appStoreHref:
      "https://apps.apple.com/jp/app/line-pay-%E5%89%B2%E5%BC%95%E3%82%AF%E3%83%BC%E3%83%9D%E3%83%B3%E3%81%8C%E3%81%8A%E5%BE%97%E3%81%AA%E3%82%B9%E3%83%9E%E3%83%9B%E6%B1%BA%E6%B8%88%E3%82%A2%E3%83%97%E3%83%AA/id1449817412",
    iconSrc: messengerAppIcon3,
    imageSrc: messengerAppPic3,
  },
  {
    title: "LINE MUSIC",
    abstract: (
      <span>
        Listen, Watch and <br />
        Sing along.
      </span>
    ),
    description:
      "LINE MUSIC is a music streaming service in Japan with over 70 million songs, both Japanese and foreign. Users can listen to trending songs, watch music videos and enjoy the sing-along feature.",
    href: "https://music.line.me/about/",
    appStoreHref: "https://apps.apple.com/jp/app/linemusic/id966142320",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=jp.linecorp.linemusic.android",
    iconSrc: messengerAppIcon4,
    imageSrc: messengerAppPic4,
  },
  {
    title: "LINE CLOVA",
    abstract: (
      <span>
        People-Friendly AI <br />
        that supports your daily life.
      </span>
    ),
    description:
      "Clova is LINE's AI assistant. It offers a wide range of AI services to help solve the challenges of life and business.",
    href: "https://clova.line.me/",

    iconSrc: messengerAppIcon5,
    imageSrc: messengerAppPic5,
  },
] as Service[];

const LifeOnLine = () => {
  return (
    <Box id="lifeOnLine" w="100%" minH="100vh">
      <Heros />
      <Container
        maxW={{ base: "none", lg: "container.xl" }}
        minW={{ base: "none", lg: "container.xl" }}
        pos="relative"
        mt={10}
        pb={"20"}
      >
        <MiddleDotLine />

        {services.map((service, index) => (
          <ServiceItem key={service.title} service={service} index={index} />
        ))}
      </Container>
    </Box>
  );
};

export default LifeOnLine;

const ServiceItem = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const isEvenIndex = index % 2 === 0;
  return (
    <Flex
      align={"center"}
      pos="relative"
      flexDirection={isEvenIndex ? "row-reverse" : "row"}
      py={"16"}
    >
      {/* dot */}
      <Box
        pos="absolute"
        w="10px"
        h="10px"
        borderRadius={"full"}
        border="1px solid rgba(30,30,30,.3)"
        top={"-5px"}
        left={"calc(50%)"}
        transform="translateX(-50%)"
        background={"white"}
      ></Box>
      {/* Image */}
      <Box w={"60.2%"}>
        <Image alt={"Image of " + service.title} src={service.imageSrc} />
      </Box>
      {/* Text */}
      <Box flex={1} pl={isEvenIndex ? "10" : "0"} maxW="400px">
        <Box
          w="60px"
          h="60px"
          border={"1px solid"}
          borderColor="lineGreen"
          borderRadius={"16px"}
          overflow="hidden"
          mb="7"
        >
          <Image alt={"Image of " + service.title} src={service.iconSrc} />
        </Box>

        <Heading mb="6">{service.title}</Heading>
        <Text color={"green"} mb="3">
          {service.abstract}
        </Text>
        <Text color={"gray.600"} lineHeight="30px" pb="40px">
          {service.description}
        </Text>
        <HStack spacing={"1px"}>
          {service.appStoreHref && (
            <SquareDownloadButton
              spriteIndex={SpriteIndex.appStoreBlack}
              href={service.appStoreHref}
              borderColor="gray.200"
              transform="scale(0.89)"
            />
          )}
          {service.playStoreHref && (
            <SquareDownloadButton
              spriteIndex={SpriteIndex.playStoreBlack}
              href={service.playStoreHref}
              borderColor="gray.200"
              transform="scale(0.89)"
            />
          )}
          <Button
            w="fit-content"
            variant={"outline"}
            onClick={() => {
              window.open(service.href);
            }}
            py="7"
            fontSize={"sm"}
            _hover={{
              bgColor: "lineGreen",
              color: "white",
              ".sprite": {
                backgroundPosition:
                  spriteDownloadListStyle[SpriteIndex.externalWhite]
                    .backgroundPosition,
              },
            }}
          >
            <HStack py="4" spacing={0}>
              <SpirteIcon
                spriteIndex={SpriteIndex.externalBlack}
                transform="scale(0.8)"
              />
              <Text>More Detail</Text>
            </HStack>
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

const MiddleDotLine = () => {
  return (
    <>
      <Box
        h="100%"
        w="1px"
        position={"absolute"}
        top={0}
        left={"50%"}
        transform="translateX(-50%)"
        border={"1px dashed rgb(178, 178, 178)"}
        opacity={0.3}
      ></Box>
      <Box
        w="20px"
        h="20px"
        position={"absolute"}
        top={"100%"}
        left={"50%"}
        transform="translateX(-50%) translateY(-50%)"
        border={"1px solid #b2b2b2"}
        borderRadius="full"
        bgColor={"white"}
        color="#b2b2b2"
      >
        <Box
          pos="relative"
          transform={"translateX(-30%) translateY(-30%)"}
          fontSize="30px"
        >
          ・
        </Box>
      </Box>
    </>
  );
};
