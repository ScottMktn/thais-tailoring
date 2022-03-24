import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
  Code,
} from "@chakra-ui/react";

const Hero = () => {
  const Feature = (props: {
    children:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => (
    <Flex alignItems="center" color="brand.900" fontSize={16}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  );
  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="black"
          lineHeight="shorter"
        >
          Welcome to Thai's Tailoring Services
        </chakra.h1>
        {/* <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="brand.900"
          lineHeight="base"
        >
          My mission is to help you look as good as possible. The big day coming
          up? Prom season around the corner? Or just need your jeans to fit a
          little better? I'm here to help.
        </chakra.p> */}
        <chakra.p
          mb={8}
          fontSize={{ base: "lg", md: "xl" }}
          color="brand.900"
          lineHeight="base"
        >
          Life nowadays is pretty busy, so I bring my services directly to your
          door. No more having to figure out the travel logistics for your next
          visit to the cleaners and no more trying to find that receipt you
          misplaced.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem
            as="label"
            colSpan={{ base: "auto", lg: 4 }}
            borderColor="brand.700"
          >
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              bgColor="brand.100"
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            _hover={{
              bg: "brand.700",
            }}
            bgColor="brand.900"
            color="brand.100"
            cursor="pointer"
          >
            Get Started
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="brand.900"
        >
          <Feature>40 years of experience</Feature>
          <Feature>At-home appointments</Feature>
          <Feature>Satisfaction guarantee</Feature>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
