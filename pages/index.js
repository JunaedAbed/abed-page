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
import { BioSection, BioYear } from "../components/bio";
import Skill from "../components/skill";

const Page = () => {
  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "PHP",
    "Python",
    "Laravel",
    "MySQL",
    "Firebase",
  ];

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
            <Link href="https://www.bracu.ac.bd/" target="_blank">
              Brac University
            </Link>
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>Born in Chittagong, Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>Completed Higher Secondary School Certificate
          from{" "}
          <Link href="http://ccpc.edu.bd/" target="_blank">
            Chittagong Cantonment Public College
          </Link>
          .
        </BioSection>
        <BioSection>
          <BioYear>2018 to now</BioYear>Completing Bachelor of Science in
          Computer Science and Engineering from{" "}
          <Link href="https://www.bracu.ac.bd/" target="_blank">
            Brac University
          </Link>
          .
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link
            href="https://open.spotify.com/playlist/1VkO3YcqrjJ6ddSu6fljAo?si=eff93a93be2a4a0e"
            target="_blank"
          >
            Music
          </Link>
          ,{" "}
          <Link href="https://soundcloud.com/junaed-abed-98" target="_blank">
            Playing Guitar
          </Link>
          ,{" "}
          <Link href="https://github.com/JunaedAbed" target="_blank">
            Coding
          </Link>
          , Football,{" "}
          <Link href="https://www.instagram.com/mugdho.nef/" target="_blank">
            Photography
          </Link>
          , Watching Series
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Skill>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </Skill>
      </Section>
    </Container>
  );
};

export default Page;
