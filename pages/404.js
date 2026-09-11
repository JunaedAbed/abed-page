import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container maxW="2xl" py={{ base: 16, md: 28 }} textAlign="center">
      <Text
        fontFamily="Manrope, sans-serif"
        fontWeight={800}
        fontSize={{ base: "72px", md: "104px" }}
        lineHeight={1}
        bgGradient={useColorModeValue(
          "linear(120deg, #0071e3, #00b4b0)",
          "linear(120deg, #ffffff, #cfe9ff 55%, #8fd6ff)"
        )}
        bgClip="text"
        color="transparent"
      >
        404
      </Text>
      <Heading as="h1" variant="page-title" fontSize={{ base: "24px", md: "30px" }} mt={2}>
        This page went missing.
      </Heading>
      <Text mt={3} color={useColorModeValue("gray.600", "gray.400")}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </Text>

      <Box mt={10}>
        <NextLink href="/" legacyBehavior>
          <Button colorScheme="teal" borderRadius="full" px={8} size="lg">
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
