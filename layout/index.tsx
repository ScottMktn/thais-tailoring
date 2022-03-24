import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box bgColor="brand.300">
      <Container maxW="container.xl">
        <Header />
        <Box minH="100vh">{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
