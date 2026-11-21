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
    ListItem,
    SimpleGrid,
    Tag,
    TagLabel,
    Text,
    UnorderedList,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { SiOrcid } from "react-icons/si";
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
    const mutedColor = useColorModeValue("gray.600", "gray.400");

    const coreSkills = [
        "Flutter",
        "Dart",
        "C#",
        "ASP.NET Core",
        "MSSQL",
        "LLM / RAG integration",
    ];
    const alsoUsed = [
        "NestJS",
        "TypeScript",
        "Laravel",
        "PHP",
        "React",
        "Next.js",
        "MongoDB",
        "MySQL",
        "Firebase",
        "Python",
    ];

    const publications = [
        {
            title: "Federated Learning Approaches in Precision Agriculture: A Systematic Review of Current Trends, Challenges, and Opportunities.",
            authors: [
                "S. M. Shawon",
                "I. A. Adan",
                "M. Moniruzzaman",
                "O. H. Sinan",
                "M. J. Abed",
                "M. A. Qwaid",
                "M. T. Sarker",
                "H. B. A. Karim",
            ],
            venue: "IEEE Access, 2026.",
            doi: "10.1109/ACCESS.2026.3667548",
            summary:
                "A review of how federated learning lets farms and agri-tech systems train shared AI models without pooling their private data.",
        },
        {
            title: "Integrating Federated Learning and Explainable AI for Plant Disease Detection: A Systematic Review of Recent Advances in Precision Agriculture.",
            authors: [
                "S. M. Shawon",
                "F. L. Niha",
                "O. H. Sinan",
                "M. J. Abed",
                "M. A. Qwaid",
                "M. T. Sarker",
                "H. T. Zubair",
            ],
            venue: "International Journal of Computational Intelligence Systems (Springer), 2026.",
            doi: "10.1007/s44196-026-01219-w",
            summary:
                "A review of combining federated learning with explainable AI so plant-disease detection models stay private and their predictions stay understandable.",
        },
    ];

    const aeBullets = [
        <>
            Maintain and extend <strong>Nexoura AI</strong>, the company&apos;s AI
            chatbot (ASP.NET Core backend, Flutter companion apps on Android and
            iOS), shipping new features end to end.
        </>,
        <>
            Added <strong>chat-based order tracking</strong> to Nexoura: customers
            ask about an order in plain language, and the bot finds their customer
            codes, pulls out the order ID, calls the right country&apos;s order API
            and returns item status and invoice numbers.
        </>,
        <>
            Delivered <strong>A&amp;E Digital</strong>, a Flutter product catalog and
            sales app with an admin panel. It has <strong>100+ users</strong> in its
            first phase and is built for global rollout: live in Bangladesh, with
            Europe next.
        </>,
        <>
            Built <strong>multi-country sales order entry</strong>, now live, with
            per-country screens and API routing, draft and confirmed order states, and
            an approval workflow with a dedicated approver role and email
            notifications.
        </>,
        <>
            Restructured the backend into feature modules and built JWT guest auth with
            refresh tokens, shared by the mobile and web clients.
        </>,
        <>
            Built the approvals module in A&amp;E Digital: leave and LFA approvals are
            live, single-price and bulk-price approvals are in progress, and 10+ more
            approval types are planned.
        </>,
        <>
            Maintain a legacy Java Android app (TLS fixes, AndroidX migration,
            Gradle/JDK upgrades). Mentor one direct report and run stakeholder demos.
        </>,
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
                                <TagLabel>Open to remote roles</TagLabel>
                            </Tag>

                            <Heading as="h2" variant="page-title">
                                Md Junaed Abed
                            </Heading>

                            <Text
                                mt={4}
                                mb={2}
                                fontSize={{ base: "lg", md: "xl" }}
                                fontWeight="semibold"
                                color={useColorModeValue("gray.800", "gray.100")}
                                maxW="42rem"
                            >
                                Flutter + .NET Engineer | Shipping AI features in
                                production mobile apps | 4+ yrs | Remote
                            </Text>

                            <Paragraph mt={6}>
                                I build mobile apps and APIs that put AI in front of real
                                users: Flutter on the front, ASP.NET Core on the back,
                                LLMs in between.
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

                            <Text
                                mt={5}
                                fontSize="sm"
                                color={useColorModeValue("gray.600", "gray.400")}
                            >
                                Open to remote roles · Dhaka (UTC+6), overlaps EU and US
                                mornings.
                            </Text>

                            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3} mt={6}>
                                <Box
                                    p={4}
                                    borderRadius="20px"
                                    bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.100")}
                                >
                                    <Text
                                        fontSize="sm"
                                        color={useColorModeValue("gray.600", "gray.400")}
                                    >
                                        Mobile
                                    </Text>
                                    <Text fontWeight="semibold">Flutter, Android + iOS</Text>
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
                                        Backend
                                    </Text>
                                    <Text fontWeight="semibold">ASP.NET Core, MSSQL</Text>
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
                                        AI
                                    </Text>
                                    <Text fontWeight="semibold">LLM / RAG in production</Text>
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
                                Software Engineer, IT Innovation at{" "}
                                <Link href="https://www.amefird.com/" target="_blank">
                                    American &amp; Efird (Bangladesh) Ltd.
                                </Link>{" "}
                                (Jun 2026 to Present). Extending Nexoura AI and
                                building A&amp;E Digital: an AI chatbot and a Flutter
                                sales app used by 100+ people, with chat-based order
                                tracking and multi-country order entry live in
                                Bangladesh and rolling out to Europe.
                            </Paragraph>
                            <UnorderedList mt={4} spacing={2} pl={1} fontSize="sm">
                                {aeBullets.map((bullet, index) => (
                                    <ListItem key={index}>{bullet}</ListItem>
                                ))}
                            </UnorderedList>
                            <Box mt={5}>
                                <NextLink href="/works" legacyBehavior>
                                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                        My Portfolio
                                    </Button>
                                </NextLink>
                            </Box>
                        </Section>

                        <Section delay={0.25}>
                            <Heading as="h3" variant="section-title">
                                Education
                            </Heading>
                            <BioSection>
                                <BioYear>2018 to 2022</BioYear>
                                <Box>
                                    <Text fontWeight="semibold">
                                        B.Sc. in Computer Science &amp; Engineering,{" "}
                                        <Link href="https://www.bracu.ac.bd/" target="_blank">
                                            BRAC University
                                        </Link>
                                    </Text>
                                    <Text fontSize="sm" mt={1}>
                                        Thesis:{" "}
                                        <em>
                                            Demand forecasting in supply chains using machine
                                            learning and neural networks
                                        </em>
                                    </Text>
                                </Box>
                            </BioSection>
                        </Section>

                        <Section delay={0.28}>
                            <Heading as="h3" variant="section-title">
                                Publications
                            </Heading>
                            {publications.map((pub) => (
                                <BioSection key={pub.doi}>
                                    <Box>
                                        <Text fontWeight="semibold">{pub.title}</Text>
                                        <Text fontSize="sm" mt={1}>
                                            {pub.authors.map((author, index) => (
                                                <span key={author}>
                                                    {author === "M. J. Abed" ? (
                                                        <strong>{author}</strong>
                                                    ) : (
                                                        author
                                                    )}
                                                    {index < pub.authors.length - 1 ? ", " : ". "}
                                                </span>
                                            ))}
                                            <em>{pub.venue}</em> doi:
                                            <Link
                                                href={`https://doi.org/${pub.doi}`}
                                                target="_blank"
                                            >
                                                {pub.doi}
                                            </Link>
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            mt={2}
                                            color={mutedColor}
                                        >
                                            {pub.summary}
                                        </Text>
                                    </Box>
                                </BioSection>
                            ))}
                            <Link
                                href="https://orcid.org/0009-0009-7237-7505"
                                target="_blank"
                            >
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    size="sm"
                                    leftIcon={<Icon as={SiOrcid} />}
                                >
                                    View on ORCID
                                </Button>
                            </Link>
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
                                <BioYear>Oct 2022 to May 2024</BioYear>Mobile Apps
                                Developer at{" "}
                                <Link href="https://www.akijtakafullife.com.bd/" target="_blank">
                                    Akij Takaful Life Insurance PLC.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>May 2024 to Nov 2024</BioYear>Senior Software
                                Developer at{" "}
                                <Link href="https://www.akijventure.com/" target="_blank">
                                    Akij Venture Ltd.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>Nov 2024 to Jun 2026</BioYear>Senior Software
                                Developer at{" "}
                                <Link href="https://www.neoscoder.com/" target="_blank">
                                    Neoscoder Ltd.
                                </Link>
                            </BioSection>
                            <BioSection>
                                <BioYear>Jun 2026 to Present</BioYear>Software Engineer at{" "}
                                <Link href="https://www.amefird.com/" target="_blank">
                                    American &amp; Efird (Bangladesh) Ltd.
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
                                , Football, Photography, Watching Series
                            </Paragraph>
                        </Section>
                    </Box>

                    <Box>
                        <Section delay={0.5}>
                            <Heading as="h3" variant="section-title">
                                Skills
                            </Heading>
                            <Text
                                mt={2}
                                fontSize="sm"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="0.1em"
                            >
                                Core
                            </Text>
                            <Skill>
                                <ul className="skills-list">
                                    {coreSkills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </Skill>
                            <Text
                                mt={6}
                                fontSize="sm"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="0.1em"
                            >
                                Also used
                            </Text>
                            <Skill>
                                <ul className="skills-list">
                                    {alsoUsed.map((skill) => (
                                        <li key={skill}>{skill}</li>
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
                                <Link
                                    href="https://orcid.org/0009-0009-7237-7505"
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={SiOrcid} />}
                                        w="full"
                                        justifyContent="flex-start"
                                    >
                                        ORCID
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