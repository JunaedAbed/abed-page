import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Title = ({ children }) => (
  <Box
    mb={6}
    p={{ base: 4, md: 5 }}
    borderRadius="24px"
    bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.100")}
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    boxShadow={useColorModeValue(
      "0 16px 40px rgba(15, 23, 42, 0.08)",
      "0 16px 40px rgba(0, 0, 0, 0.22)"
    )}
  >
    <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
      <NextLink href="/works" legacyBehavior>
        <Link fontWeight="semibold">Works</Link>
      </NextLink>
      <ChevronRightIcon />
      <Badge colorScheme="teal" px={2} py={1} borderRadius="full">
        Project
      </Badge>
    </Box>
    <Heading display="block" as="h3" fontSize={{ base: 24, md: 30 }} mt={3}>
      {children}
    </Heading>
    <Text mt={2} color={useColorModeValue("gray.600", "gray.400")}>
      Selected work and case studies.
    </Text>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="24px"
    w="full"
    src={src}
    alt={alt}
    mb={5}
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    boxShadow={useColorModeValue(
      "0 16px 36px rgba(15, 23, 42, 0.10)",
      "0 16px 36px rgba(0, 0, 0, 0.28)"
    )}
  />
);
export const WorkImageApp = ({ src, alt }) => (
  <Image
    borderRadius="24px"
    w="full"
    maxW={{ base: "full", md: "560px" }}
    mx="auto"
    src={src}
    alt={alt}
    mb={5}
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    boxShadow={useColorModeValue(
      "0 16px 36px rgba(15, 23, 42, 0.10)",
      "0 16px 36px rgba(0, 0, 0, 0.28)"
    )}
  />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="teal" mr={3} borderRadius="full" px={2} py={1}>
    {children}
  </Badge>
);
