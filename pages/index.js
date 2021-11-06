import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.300")}
        p={3}
        mb={6}
        alignContent="center"
      >
        Hello, I&apos;m a fullstack developer from Bangladesh!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Md Junaed Abed
          </Heading>
          <p>(Software Developer / Designer / Mobile App developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={1}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/junaed.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>
          <Paragraph>
            I&apos;m a software engineer in Dhaka, Bangladesh with a passion for
            web development. I&apos;m currently doing a Bachelor of Science in
            Computer Science and Engineering from{" "}
            <NextLink href="www.bracu.ac.bd">
              <Link>Brac University</Link>
            </NextLink>
            . Currently I&apos;m working on my thesis based on Deep Learning
            algorithm.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </p>
      </Section>
    </Container>
  );
};

export default Page;
