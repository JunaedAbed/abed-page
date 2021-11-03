import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

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
    </Container>
  );
};

export default Page;
