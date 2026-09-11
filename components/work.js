import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Grid,
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
    bg={useColorModeValue("rgba(255,255,255,0.8)", "rgba(255,255,255,0.045)")}
    backdropFilter="blur(20px)"
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    boxShadow={useColorModeValue(
      "0 16px 40px rgba(15, 23, 42, 0.08)",
      "0 20px 50px rgba(0, 0, 0, 0.45)"
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
    borderRadius="20px"
    w="full"
    maxH={{ base: "180px", lg: "none" }}
    objectFit="cover"
    src={src}
    alt={alt}
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    boxShadow={useColorModeValue(
      "0 8px 24px rgba(15, 23, 42, 0.08)",
      "0 8px 28px rgba(0, 0, 0, 0.4)"
    )}
  />
);

export const WorkImageApp = ({ src, alt }) => (
  <Image
    borderRadius="20px"
    w="full"
    src={src}
    alt={alt}
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    boxShadow={useColorModeValue(
      "0 8px 24px rgba(15, 23, 42, 0.08)",
      "0 8px 28px rgba(0, 0, 0, 0.4)"
    )}
  />
);

export const WorkDetailGrid = ({ children }) => (
  <Grid
    templateColumns={{ base: "1fr", lg: "1fr 360px" }}
    gap={{ base: 5, md: 6 }}
    mt={4}
    alignItems="start"
  >
    {children}
  </Grid>
);

export const WorkInfoPanel = ({ children }) => (
  <Box
    p={{ base: 4, md: 6 }}
    borderRadius="20px"
    bg={useColorModeValue("rgba(255,255,255,0.85)", "rgba(255,255,255,0.045)")}
    backdropFilter="blur(20px)"
    border="1px solid"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    boxShadow={useColorModeValue(
      "0 8px 32px rgba(15, 23, 42, 0.07)",
      "0 8px 32px rgba(0, 0, 0, 0.4)"
    )}
    position={{ base: "static", lg: "sticky" }}
    top={{ lg: "96px" }}
  >
    {children}
  </Box>
);

export const WorkImagePanel = ({ children }) => (
  <Box display="flex" flexDirection="column" gap={3}>
    {children}
  </Box>
);

export const Meta = ({ children }) => (
  <Badge colorScheme="teal" mr={3} borderRadius="full" px={2} py={1}>
    {children}
  </Badge>
);
