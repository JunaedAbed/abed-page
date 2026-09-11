import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    SimpleGrid,
    Tag,
    TagLabel,
    Text,
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
        "TypeScript",
        "Python",
        "C#",
        "Dart",
        ".NET",
        "NestJs",
        "NextJS",
        "Flutter",
        "React",
        "Node.js",
        "MySQL",
        "Firebase",
        "MSSQL",
        "MongoDB",
    ];

    return (
        <Layout>
            <Container maxW="7xl" px={{ base: 4, md: 6 }}>
                <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius="32px"
                    p={{ base: 5, md: 8 }}
                    mt={{ base: 2, md: 6 }}
                    mb={12}
                    bg={useColorModeValue(
                        "linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(234,246,255,0.98) 100%)",
                        "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                    )}
                    border="1px solid"
                    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
                    boxShadow={useColorModeValue(
                        "0 24px 72px rgba(15, 23, 42, 0.10)",
                        "0 24px 72px rgba(0, 0, 0, 0.5)"
                    )}
                    sx={{
                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        transform: "translateZ(0)",
                    }}
                >
                    <Box
                        position="absolute"
                        inset="auto -90px -120px auto"
                        w="260px"
                        h="260px"
                        borderRadius="full"
                        bg={useColorModeValue(
                            "rgba(10,132,255,0.18)",
                            "rgba(10,132,255,0.3)"
                        )}
                        filter="blur(16px)"
                    />
                    <Box
                        position="absolute"
                        inset="-80px auto auto -100px"
                        w="240px"
                        h="240px"
                        borderRadius="full"
                        bg={useColorModeValue(
                            "rgba(50,214,196,0.14)",
                            "rgba(50,214,196,0.22)"
                        )}
                        filter="blur(18px)"
                    />

                    <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={{ base: 8, lg: 10 }}>
                        <Box gridColumn={{ lg: "span 7" }} position="relative" zIndex={1}>
                            <Tag
                                size="lg"
                                borderRadius="full"
                                px={4}
                                py={2}
                                mb={4}
                                bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
                            >
                                <TagLabel>Software Engineer</TagLabel>
                            </Tag>

                            <Heading as="h2" variant="page-title">
                                Md Junaed Abed
                            </Heading>

                            <Text
                                mt={4}
                                mb={2}
                                fontSize={{ base: "lg", md: "xl" }}
                                color={useColorModeValue("gray.700", "gray.300")}
                                maxW="42rem"
                            >
                                Building clean, scalable software for web and mobile.
                            </Text>

                            <Paragraph mt={8} >
                                I&apos;m a software engineer passionate about building high-performance,
                                scalable backend systems and delivering exceptional web and mobile applications.
                                I thrive on creating clean, maintainable codebases that balance speed, reliability,
                                and long-term maintainability.
                            </Paragraph>

                            <HStack spacing={3} mt={6} flexWrap="wrap" justify="flex-start">
                                <NextLink href="/works" legacyBehavior>
                                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                        View work
                                    </Button>
                                </NextLink>
                                <Button
                                    as={Link}
                                    href="mailto:junaed98m@gmail.com"
                                    variant="outline"
                                    colorScheme="teal"
                                >
                                    Contact me
                                </Button>
                            </HStack>

                            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3} mt={8}>
                                <Box
                                    p={4}
                                    borderRadius="20px"
                                    bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.100")}
                                >
                                    <Text
                                        fontSize="sm"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        Focus
                                    </Text>
                                    <Text fontWeight="semibold">Backend systems</Text>
                                </Box>
                                <Box
                                    p={4}
                                    borderRadius="20px"
                                    bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.100")}
                                >
                                    <Text
                                        fontSize="sm"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        Delivery
                                    </Text>
                                    <Text fontWeight="semibold">Web and mobile</Text>
                                </Box>
                                <Box
                                    p={4}
                                    borderRadius="20px"
                                    bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.100")}
                                >
                                    <Text
                                        fontSize="sm"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        Approach
                                    </Text>
                                    <Text fontWeight="semibold">Fast, maintainable</Text>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        <Flex
                            gridColumn={{ lg: "span 5" }}
                            position="relative"
                            zIndex={1}
                            justify="center"
                            align="flex-start"
                        >
                            <Box
                                p={3}
                                borderRadius="32px"
                                bg={useColorModeValue("whiteAlpha.900", "rgba(255,255,255,0.04)")}
                                border="1px solid"
                                borderColor={useColorModeValue(
                                    "blackAlpha.100",
                                    "whiteAlpha.200"
                                )}
                                boxShadow={useColorModeValue(
                                    "0 18px 42px rgba(15, 23, 42, 0.14)",
                                    "0 0 0 1px rgba(10,132,255,0.25), 0 24px 60px rgba(0, 0, 0, 0.5)"
                                )}
                                w={{ base: "full", md: "90%" }}
                            >
                                <Image
                                    borderColor={useColorModeValue("white", "whiteAlpha.200")}
                                    borderWidth={1}
                                    borderStyle="solid"
                                    width="100%"
                                    aspectRatio={1}
                                    objectFit="cover"
                                    borderRadius="28px"
                                    src="/images/junaed.jpg"
                                    alt="Profile Image"
                                />
                            </Box>
                        </Flex>
                    </SimpleGrid>
                </Box>

                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 14 }}>
                    <Box>
                        <Section delay={0.2}>
                            <Heading as="h3" variant="section-title">
                                Work
                            </Heading>
                            <Paragraph>
                                I&apos;m currently working as a Senior Executive Software Engineer
                                at{" "}
                                <Link href="https://www.neoscoder.com/" target="_blank">
                                    Neoscoder Ltd
                                </Link>
                                . I like building systems that stay fast, readable, and easy to
                                extend as the product grows.
                            </Paragraph>
                            <Box mt={5}>
                                <NextLink href="/works" legacyBehavior>
                                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                        My Portfolio
                                    </Button>
                                </NextLink>
                            </Box>
                        </Section>

                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                Bio
                            </Heading>
                            <BioSection>
                                <BioYear>1999</BioYear>Born in Chittagong, Bangladesh.
                            </BioSection>
                            <BioSection>
                                <BioYear>2017</BioYear>
                                Completed Higher Secondary School Certificate from{" "}
                                <Link href="http://ccpc.edu.bd/" target="_blank">
                                    Chittagong Cantonment Public College.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>2022</BioYear>
                                Completed Bachelor of Science in Computer Science and
                                Engineering from{" "}
                                <Link href="https://www.bracu.ac.bd/" target="_blank">
                                    Brac University.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>Oct 2022 to May 2024</BioYear>ERP and Android
                                Developer at{" "}
                                <Link href="https://www.akijtakafullife.com.bd/" target="_blank">
                                    Akij Takaful Life Insurance PLC.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>May 2024 to Nov 2024</BioYear>Senior Executive
                                (Backend Developer) at{" "}
                                <Link href="https://www.akijventure.com/" target="_blank">
                                    Akij Venture Ltd.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>Nov 2024 to Present</BioYear>Senior Executive
                                (Backend Developer) at{" "}
                                <Link href="https://www.neoscoder.com/" target="_blank">
                                    Neoscoder Ltd.
                                </Link>
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
                    </Box>

                    <Box>
                        <Section delay={0.5}>
                            <Heading as="h3" variant="section-title">
                                Skills
                            </Heading>
                            <Skill>
                                <ul className="skills-list">
                                    {skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </Skill>
                        </Section>

                        <Section delay={0.6}>
                            <Heading as="h3" variant="section-title">
                                Catch me on
                            </Heading>
                            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3}>
                                <Link href="mailto:junaed98m@gmail.com" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoMail} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @Md. Junaed Abed
                                    </Button>
                                </Link>
                                <Link href="https://github.com/JunaedAbed" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoGithub} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @JunaedAbed
                                    </Button>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/mdjunaedabed/"
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoLinkedin} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @mdjunaedabed
                                    </Button>
                                </Link>
                                <Link href="https://www.facebook.com/junaed.abed" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoFacebook} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @junaed.abed
                                    </Button>
                                </Link>
                                <Link href="https://www.instagram.com/mugdho.abed/" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoInstagram} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @mugdho.abed
                                    </Button>
                                </Link>
                                <Link href="https://twitter.com/junaed_abed_" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoTwitter} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @junaed_abed_
                                    </Button>
                                </Link>
                                <Link href="https://www.pinterest.com/jmugdho/" target="_blank">
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoPinterest} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @jmugdho
                                    </Button>
                                </Link>
                                <Link
                                    href="https://discordapp.com/users/708306618663698432/"
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoDiscord} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        @Junaed Abed#6767
                                    </Button>
                                </Link>
                            </SimpleGrid>

                            <Divider
                                my={8}
                                borderColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
                            />

                            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
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
                                <GridItem title="Fair Value" thumbnail={thumbFairValue}>
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
                    </Box>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Page;