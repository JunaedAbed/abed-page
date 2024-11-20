import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import { BioSection, BioYear } from "../components/bio";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Skill from "../components/skill";
import thumbFairValue from "../public/images/links/fair_value.png";
import thumbMyAkijTakaful from "../public/images/links/my_akij_takaful.png";
import thumbSweetsCloud from "../public/images/links/sweets-cloud.png";
import thumbYouTube from "../public/images/links/YouTube.png";

const Page = () => {
  const skills = [
    "Java",
    "React",
    "JavaScript",
    "React Native",
    "TypeScript",
    "Node.js",
    "Python",
    "Laravel",
    "PHP",
    "ASP.net",
    "C#",
    "NextJS",
    "Dart",
    "Flutter",
    "NestJs",
    "MySQL",
    "Firebase",
    "MSSQL",
    "MongoDB",
  ];

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.300")}
          p={3}
          mb={6}
          mt={10}
          alignContent="center"
        >
          Hello, I&apos;m a developer transforming ideas into scallable
          software!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Md Junaed Abed
            </Heading>
            <p>Software Engineer</p>
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
          {/* <p> */}
          <Paragraph>
            I&apos;m currently working as a Senior Executive Software Engineer
            at{" "}
            <Link href="https://www.akijventure.com/" target="_blank">
              Akij Venture Ltd.
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" legacyBehavior>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
          {/* </p> */}
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
            <BioYear>2022</BioYear>Completed Bachelor of Science in Computer
            Science and Engineering from{" "}
            <Link href="https://www.bracu.ac.bd/" target="_blank">
              Brac University
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>Oct 2022 to May 2024</BioYear>ERP and Android Developer{" "}
            <Link href="https://www.akijtakafullife.com.bd/" target="_blank">
              Akij Takaful Life Insurance PLC
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>May 2024 to Present</BioYear>Senior Executive (Mobile App
            Developer){" "}
            <Link href="https://www.akijventure.com/" target="_blank">
              Akij Venture Ltd.
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

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Catch me on
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:junaed98m@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  @Md. Junaed Abed
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/JunaedAbed" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @JunaedAbed
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mdjunaedabed/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @mdjunaedabed
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/junaed.abed" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @junaed.abed
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/mugdho.abed/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @mugdho.abed
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/junaed_abed_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @junaed_abed_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.pinterest.com/jmugdho/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoPinterest} />}
                >
                  @jmugdho
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/708306618663698432/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @Junaed Abed#6767
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/channel/UCbm159PNhsIgRM8dwDgq06Q/videos"
              title="Junaed Abed"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
            <GridItem
              href="https://www.sweetscloudbd.com/"
              title="Sweets"
              thumbnail={thumbSweetsCloud}
            >
              An E-commerce website for sweets
            </GridItem>
            <GridItem
              href="https://covid-tracker-3ce38.web.app/"
              title="Fair Value"
              thumbnail={thumbFairValue}
            >
              Multi Vendor E-commerce App
            </GridItem>
            <GridItem
              href="https://play.google.com/store/apps/details?id=com.akijtakafullife.myAkijTakaful"
              title="My Akij Takaful"
              thumbnail={thumbMyAkijTakaful}
            >
              An Insurance App
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
