import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Heading,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { GiAmpleDress, GiLargeDress, GiSewingMachine } from "react-icons/gi";

export default function Skills() {
  const Feature = (props: {
    icon:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    title:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    children:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    return (
      <Box bgColor="brand.500" p={8} borderRadius="8px">
        <Icon
          boxSize={16}
          color="brand.900"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          color="black"
        >
          {props.title}
        </chakra.h3>
        <chakra.p lineHeight="tall" color="brand.900">
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Stack
      spacing={12}
      align={"center"}
      pt={{ base: 4, md: 8 }}
      pb={{ base: 0, lg: 12, xl: 16 }}
    >
      <Box textAlign="center">
        <Heading mb={3}>Skills</Heading>
        <Text px={{ base: 4, lg: 16, xl: 24 }} color="brand.900">
          These are my areas of expertise and where I spend most of my work
          time.
        </Text>
      </Box>

      <Flex
        bg="brand.300"
        w="auto"
        justifyContent="center"
        alignItems="center"
        pb={12}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={16}
          px={{ base: 4, lg: 16, xl: 24 }}
          mx="auto"
          bg="brand.300"
        >
          <Feature title="Wedding Gowns" icon={<GiAmpleDress />}>
            The big day requires even bigger alterations. I love working with
            brides to make ordinary wedding gowns into the gowns they imagined
            themselves in as a kid. The big day is a stressful one, so remove
            the stress knowing you'll be looking your best.
          </Feature>

          <Feature title="Prom Dresses" icon={<GiLargeDress />}>
            Prom season is one of my favorite seasons as I get to help beautiful
            young women prepare for a day they will remember forever. There is
            nothing better than the confident glow of a high-schooler looking in
            the mirror knowing they are going to turn heads.
          </Feature>

          <Feature title="Tailoring and Mending" icon={<GiSewingMachine />}>
            There is absolutely nothing worse than a pair a jeans that goes a
            little too far or is a little too short. You feel like a million
            bucks when your pants, shirts, and jackets fit just right to your
            proportions. And what's better than a unique mend pattern to fix a
            pair of pants!
          </Feature>
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
