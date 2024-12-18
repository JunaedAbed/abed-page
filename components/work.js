import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" legacyBehavior>
      <Link>Works</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);
export const WorkImageApp = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w={["100%", "85%", "75%", "60%"]}
    src={src}
    alt={alt}
    mb={4}
  />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="yellow" mr={3}>
    {children}
  </Badge>
);
