import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  IoDocumentText,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { SiOrcid } from "react-icons/si";
import {
  Chip,
  MONO,
  SectionLabel,
  SideNav,
  SplitLayout,
  STICKY_TOP,
  useActiveSection,
  usePalette,
} from "../components/design";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import thumbFairValue from "../public/images/links/fair_value.png";
import thumbMyAkijTakaful from "../public/images/links/my_akij_takaful.png";
import thumbSweetsCloud from "../public/images/links/sweets-cloud.png";
import thumbYouTube from "../public/images/links/YouTube.png";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const pastRoles = [
  {
    period: "Nov 2024 — Jun 2026",
    title: "Senior Software Developer",
    company: "Neoscoder Ltd.",
    href: "https://www.neoscoder.com/",
  },
  {
    period: "May 2024 — Nov 2024",
    title: "Senior Software Developer",
    company: "Akij Venture Ltd.",
    href: "https://www.akijventure.com/",
  },
  {
    period: "Oct 2022 — May 2024",
    title: "Mobile Apps Developer",
    company: "Akij Takaful Life Insurance PLC",
    href: "https://www.akijtakafullife.com.bd/",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/JunaedAbed",
    icon: IoLogoGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mdjunaedabed/",
    icon: IoLogoLinkedin,
  },
  { label: "Email", href: "mailto:junaed98m@gmail.com", icon: IoMail },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0009-7237-7505",
    icon: SiOrcid,
  },
];

const Page = () => {
  const [active, setActive] = useActiveSection(
    NAV_ITEMS.map((item) => item.id),
  );
  const [showAllBullets, setShowAllBullets] = useState(false);

  const { accent, accentFg, strong, body, muted, border, cardBg, cardHover } =
    usePalette();

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
      title:
        "Federated Learning Approaches in Precision Agriculture: A Systematic Review of Current Trends, Challenges, and Opportunities.",
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
      title:
        "Integrating Federated Learning and Explainable AI for Plant Disease Detection: A Systematic Review of Recent Advances in Precision Agriculture.",
      authors: [
        "S. M. Shawon",
        "F. L. Niha",
        "O. H. Sinan",
        "M. J. Abed",
        "M. A. Qwaid",
        "M. T. Sarker",
        "H. T. Zubair",
      ],
      venue:
        "International Journal of Computational Intelligence Systems (Springer), 2026.",
      doi: "10.1007/s44196-026-01219-w",
      summary:
        "A review of combining federated learning with explainable AI so plant-disease detection models stay private and their predictions stay understandable.",
    },
  ];

  const aeBullets = [
    <>
      Maintain and extend <strong>Nexoura AI</strong>, the company&apos;s AI
      chatbot (ASP.NET Core backend, Flutter companion apps on Android and iOS),
      shipping new features end to end.
    </>,
    <>
      Added <strong>chat-based order tracking</strong> to Nexoura: customers ask
      about an order in plain language, and the bot finds their customer codes,
      pulls out the order ID, calls the right country&apos;s order API and
      returns item status and invoice numbers.
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
      Restructured the backend into feature modules and built JWT guest auth
      with refresh tokens, shared by the mobile and web clients.
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

  const visibleBullets = showAllBullets ? aeBullets : aeBullets.slice(0, 3);

  const cardProps = {
    p: { base: 5, md: 6 },
    borderRadius: "16px",
    border: "1px solid",
    borderColor: border,
    bg: cardBg,
  };

  return (
    <Layout>
      <SplitLayout
        aside={
          <Stack spacing={7}>
            <Stack spacing={4}>
              <Image
                src="/images/junaed.jpg"
                alt="Portrait of Md Junaed Abed"
                boxSize="96px"
                borderRadius="full"
                objectFit="cover"
                border="2px solid"
                borderColor={border}
              />
              <Heading
                as="h1"
                fontSize={{ base: "38px", md: "46px" }}
                lineHeight={1.05}
                letterSpacing="-0.02em"
                fontWeight={800}
                color={strong}
              >
                Md Junaed Abed
              </Heading>
              <Text fontSize="lg" fontWeight={600} color={strong}>
                Software Engineer · Flutter, .NET, AI
              </Text>
              <Text fontSize="md" lineHeight={1.65} color={muted} maxW="340px">
                Shipping AI features in production mobile apps. 4+ years of
                experience. Open to remote work.
              </Text>
              <HStack
                alignSelf="flex-start"
                spacing={2}
                fontFamily={MONO}
                fontSize="12px"
                color={accent}
                border="1px solid"
                borderColor={border}
                px={3}
                py={1.5}
                borderRadius="full"
              >
                <Box w="7px" h="7px" borderRadius="full" bg={accent} />
                <Text as="span">open to remote · Dhaka, UTC+6</Text>
              </HStack>
            </Stack>

            <SideNav items={NAV_ITEMS} active={active} onSelect={setActive} />

            <HStack spacing={2} flexWrap="wrap" rowGap={2}>
              <Button
                as="a"
                href="/Md_Junaed_Abed_CV.pdf"
                target="_blank"
                leftIcon={<Icon as={IoDocumentText} />}
                bg={accent}
                color={accentFg}
                _hover={{ opacity: 0.9 }}
                borderRadius="10px"
                h="44px"
              >
                Resume
              </Button>
              {socials.map(({ label, href, icon }) => (
                <IconButton
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  icon={<Icon as={icon} boxSize="18px" />}
                  variant="outline"
                  borderColor={border}
                  color={body}
                  borderRadius="10px"
                  w="44px"
                  h="44px"
                />
              ))}
            </HStack>
          </Stack>
        }
      >
        <Section delay={0.1}>
          <Box as="section" id="about" scrollMarginTop={STICKY_TOP} mb={16}>
            <SectionLabel>About</SectionLabel>
            <Text fontSize="17px" lineHeight={1.75} color={body}>
              I build mobile apps and APIs that put AI in front of real users:{" "}
              <Text as="strong" color={strong}>
                Flutter
              </Text>{" "}
              on the front,{" "}
              <Text as="strong" color={strong}>
                ASP.NET Core
              </Text>{" "}
              on the back,{" "}
              <Text as="strong" color={strong}>
                LLMs
              </Text>{" "}
              in between. I work from Dhaka (UTC+6), which overlaps with EU and
              US mornings.
            </Text>
            <Text fontSize="sm" color={muted} mt={4}>
              Outside work:{" "}
              <Link
                href="https://open.spotify.com/playlist/1VkO3YcqrjJ6ddSu6fljAo?si=eff93a93be2a4a0e"
                target="_blank"
              >
                music
              </Link>
              ,{" "}
              <Link
                href="https://soundcloud.com/junaed-abed-98"
                target="_blank"
              >
                guitar
              </Link>
              , football, photography and series.
            </Text>

            <Box mt={8}>
              <Text
                fontFamily={MONO}
                fontSize="12px"
                color={muted}
                mb={3}
                textTransform="uppercase"
                letterSpacing="0.1em"
              >
                Core stack
              </Text>
              <Wrap spacing={2}>
                {coreSkills.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </Wrap>
              <Text
                fontFamily={MONO}
                fontSize="12px"
                color={muted}
                mt={5}
                mb={3}
                textTransform="uppercase"
                letterSpacing="0.1em"
              >
                Also used
              </Text>
              <Wrap spacing={2}>
                {alsoUsed.map((s) => (
                  <Chip key={s} isCore={false}>
                    {s}
                  </Chip>
                ))}
              </Wrap>
            </Box>
          </Box>
        </Section>

        <Section delay={0.15}>
          <Box
            as="section"
            id="experience"
            scrollMarginTop={STICKY_TOP}
            mb={16}
          >
            <SectionLabel>Experience</SectionLabel>

            <Flex {...cardProps} gap={{ base: 3, md: 6 }} wrap="wrap">
              <Text
                fontFamily={MONO}
                fontSize="12px"
                color={muted}
                w={{ base: "full", md: "130px" }}
                pt={1}
                flexShrink={0}
              >
                JUN 2026 — NOW
              </Text>
              <Box flex="1 1 320px" minW={0}>
                <Text fontSize="17px" fontWeight={600} color={strong}>
                  Software Engineer, IT Innovation ·{" "}
                  <Link href="https://www.amefird.com/" target="_blank">
                    American &amp; Efird (Bangladesh) Ltd.
                  </Link>
                </Text>
                <UnorderedList
                  mt={3}
                  spacing={2}
                  fontSize="15px"
                  lineHeight={1.65}
                  color={body}
                  ml={5}
                >
                  {visibleBullets.map((bullet, index) => (
                    <ListItem key={index}>{bullet}</ListItem>
                  ))}
                </UnorderedList>
                <Button
                  mt={3}
                  size="sm"
                  minH="44px"
                  variant="ghost"
                  color={accent}
                  px={2}
                  onClick={() => setShowAllBullets((v) => !v)}
                  aria-expanded={showAllBullets}
                >
                  {showAllBullets
                    ? "Show less"
                    : `Show ${aeBullets.length - 3} more`}
                </Button>
                <Wrap spacing={2} mt={3}>
                  {["Flutter", "ASP.NET Core", "LLM / RAG", "MSSQL"].map(
                    (s) => (
                      <Chip key={s}>{s}</Chip>
                    ),
                  )}
                </Wrap>
              </Box>
            </Flex>

            {pastRoles.map((role) => (
              <Flex
                key={role.company}
                gap={{ base: 1, md: 6 }}
                wrap="wrap"
                px={{ base: 5, md: 6 }}
                py={5}
                borderBottom="1px solid"
                borderColor={border}
                _last={{ borderBottom: "none" }}
              >
                <Text
                  fontFamily={MONO}
                  fontSize="12px"
                  color={muted}
                  w={{ base: "full", md: "130px" }}
                  pt={1}
                  flexShrink={0}
                  textTransform="uppercase"
                >
                  {role.period}
                </Text>
                <Text
                  flex="1 1 320px"
                  minW={0}
                  fontSize="16px"
                  fontWeight={600}
                  color={strong}
                >
                  {role.title} ·{" "}
                  <Link href={role.href} target="_blank">
                    {role.company}
                  </Link>
                </Text>
              </Flex>
            ))}
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box
            as="section"
            id="publications"
            scrollMarginTop={STICKY_TOP}
            mb={16}
          >
            <SectionLabel>Publications</SectionLabel>
            <Stack spacing={3}>
              {publications.map((pub) => (
                <Box
                  key={pub.doi}
                  {...cardProps}
                  transition="border-color 0.2s ease"
                  _hover={{ borderColor: cardHover }}
                >
                  <Link
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    color={strong}
                    fontSize="16px"
                    fontWeight={600}
                    lineHeight={1.45}
                  >
                    {pub.title} ↗
                  </Link>
                  <Text fontSize="13px" color={muted} mt={2}>
                    {pub.authors.map((author, index) => (
                      <span key={author}>
                        {author === "M. J. Abed" ? (
                          <Text as="strong" color={strong}>
                            {author}
                          </Text>
                        ) : (
                          author
                        )}
                        {index < pub.authors.length - 1 ? ", " : ". "}
                      </span>
                    ))}
                    <em>{pub.venue}</em>
                  </Text>
                  <Text fontSize="14px" color={body} mt={2}>
                    {pub.summary}
                  </Text>
                </Box>
              ))}
            </Stack>
            <Button
              as="a"
              href="https://orcid.org/0009-0009-7237-7505"
              target="_blank"
              mt={4}
              size="sm"
              minH="44px"
              variant="outline"
              borderColor={border}
              color={body}
              leftIcon={<Icon as={SiOrcid} />}
            >
              View on ORCID
            </Button>
          </Box>
        </Section>

        <Section delay={0.25}>
          <Box as="section" id="projects" scrollMarginTop={STICKY_TOP} mb={16}>
            <SectionLabel>Projects</SectionLabel>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
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
            <Button
              as="a"
              href="/works"
              mt={6}
              variant="outline"
              borderColor={border}
              color={body}
            >
              All works →
            </Button>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box as="section" id="education" scrollMarginTop={STICKY_TOP}>
            <SectionLabel>Education</SectionLabel>
            <Stack spacing={0}>
              <Flex gap={{ base: 1, md: 6 }} wrap="wrap" py={4}>
                <Text
                  fontFamily={MONO}
                  fontSize="12px"
                  color={muted}
                  w={{ base: "full", md: "130px" }}
                  pt={1}
                  flexShrink={0}
                >
                  2018 — 2022
                </Text>
                <Box flex="1 1 320px" minW={0}>
                  <Text fontSize="16px" fontWeight={600} color={strong}>
                    B.Sc. in Computer Science &amp; Engineering ·{" "}
                    <Link href="https://www.bracu.ac.bd/" target="_blank">
                      BRAC University
                    </Link>
                  </Text>
                  <Text fontSize="14px" color={muted} mt={1}>
                    Thesis:{" "}
                    <em>
                      Demand forecasting in supply chains using machine learning
                      and neural networks
                    </em>
                  </Text>
                </Box>
              </Flex>
              <Flex gap={{ base: 1, md: 6 }} wrap="wrap" py={4}>
                <Text
                  fontFamily={MONO}
                  fontSize="12px"
                  color={muted}
                  w={{ base: "full", md: "130px" }}
                  pt={1}
                  flexShrink={0}
                >
                  2017
                </Text>
                <Text
                  flex="1 1 320px"
                  minW={0}
                  fontSize="16px"
                  fontWeight={600}
                  color={strong}
                >
                  Higher Secondary Certificate ·{" "}
                  <Link href="http://ccpc.edu.bd/" target="_blank">
                    Chittagong Cantonment Public College
                  </Link>
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Section>
      </SplitLayout>
    </Layout>
  );
};

export default Page;
