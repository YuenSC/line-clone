import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

import appImage1 from "../public/appImage1.png";
import appImage2 from "../public/appImage2.png";
import appImage3 from "../public/appImage3.png";
import appImage4 from "../public/appImage4.png";
import appImage5 from "../public/appImage5.png";
import appImage6 from "../public/appImage6.png";

interface MessengerApp {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

const messengerApps = [
  {
    imgSrc: appImage1,
    title: "Texts, Voice & Video Calls",
    description:
      "You can send one-on-one and group texts, and use international voice and video calls with your friends.",
  },
  {
    imgSrc: appImage2,
    title: "Stickers, Emoji, Themes",
    description:
      "You can share you feelings with stickers or emoji, and wrap your app with colorful themes",
  },
  {
    imgSrc: appImage3,
    title: "OpenChat",
    description:
      "You can meet new friends with similar interests and share fun news and information.",
  },
  {
    imgSrc: appImage4,
    title: "Hometab",
    description: `You can access to various information, services, contents like LINE family services, stickers, etc.`,
  },
  {
    imgSrc: appImage5,
    title: "LINE VOOM",
    description: `Explore even more content that you may like in the "For you" tab.`,
  },
  {
    imgSrc: appImage6,
    title: "Wallet",
    description: `Paying or sending money by "LINE Pay", and you can use various LINE financial services.`,
  },
] as MessengerApp[];

const MessengerApp = () => {
  return (
    <Box bgColor={"#f7f8f9"}>
      <Container
        maxW="container.xl"
        w="100%"
        id="messengerApp"
        minH="100vh"
        py="20"
        px="20"
      >
        <VStack>
          <Heading fontSize={"6xl"} fontWeight="black">
            Messenger APP
          </Heading>
          <Text w="60%" textAlign={"center"} pb={20}>
            New communication app which allows you to make FREE voice calls and
            send FREE messages whenever and wherever you are, 24 hours a day!
          </Text>

          <SimpleGrid columns={3} gap={10}>
            {messengerApps.map((app) => (
              <Box key={app.title} textAlign="center">
                <Image src={app.imgSrc} alt={`image of ${app.title}`} />
                <Heading fontSize={"xl"} mt={4}>
                  {app.title}
                </Heading>
                <Text fontSize={"sm"} mt={2}>
                  {app.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default MessengerApp;
