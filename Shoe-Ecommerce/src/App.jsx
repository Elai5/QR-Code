/** @format */

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
};

export default App;
