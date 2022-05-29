import { Box, Container, Stack, color } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRef, useState } from "react";

import Heros from "../components/Heros";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isAtTheTop, setIsAtTheTop] = useState(false);

  return (
    <Stack
      ref={ref}
      h="100vh"
      overflow="auto"
      onScroll={(e) => {
        const scrollTop = e.currentTarget.scrollTop;
        if (!isNaN(scrollTop)) setIsAtTheTop(scrollTop === 0);
      }}
    >
      <Heros isAtTheTop={isAtTheTop} />

      <Container minH="100vh" w="100%">
        <Box h="100vh" bgColor={"red"} />
        <Box h="100vh" bgColor={"yellow"} />
      </Container>
    </Stack>
  );
};

export default Home;
