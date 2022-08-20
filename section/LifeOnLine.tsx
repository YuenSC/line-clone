import { Box } from "@chakra-ui/react";
import React from "react";

import Heros from "../components/Heros";

const LifeOnLine = () => {
  return (
    <Box id="lifeOnLine" w="100%" h="100vh">
      <Heros isAtTheTop={true} />
    </Box>
  );
};

export default LifeOnLine;
