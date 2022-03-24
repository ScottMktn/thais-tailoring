import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import React from "react";
import Layout from "../layout";
import "../styles/styles.css";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "white",
    300: "#F4EEFF",
    500: "#DCD6F7",
    700: "#A6B1E1",
    900: "#424874",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
