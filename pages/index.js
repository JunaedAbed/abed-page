import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} alignContent="center">
        Hello, I&apos;m a fullstack developer from Bangladesh!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Md Junaed Abed
          </Heading>
          <p>(Software Developer / Designer / Mobile App developer)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
