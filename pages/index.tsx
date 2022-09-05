import { Box, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRef } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CorporateServices from "../section/CorporateServices";
import LifeOnLine from "../section/LifeOnLine";
import MessengerApp from "../section/MessengerApp";
import Services from "../section/Services";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <LifeOnLine />
      <MessengerApp />
      <CorporateServices />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
