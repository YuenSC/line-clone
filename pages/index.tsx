import { Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Heros from "../components/Heros";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Stack minH="100vh" w="100%">
      <Heros />
    </Stack>
  );
};

export default Home;
