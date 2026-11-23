import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  MONO,
  SectionLabel,
  SideNav,
  SplitLayout,
  STICKY_TOP,
  useActiveSection,
  usePalette,
} from "../components/design";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import thumbNexoura from "../public/images/works/nexoura-ai.png";
import thumbAeDigital from "../public/images/works/ae-digital.png";
import thumbHris from "../public/images/works/hris.png";
import thumbStoreSales from "../public/images/works/store-sales.png";
import thumbFairValue from "../public/images/links/fair_value.png";
import thumbMyAkijTakaful from "../public/images/links/my_akij_takaful.png";
import thumbCarpod from "../public/images/works/carpod.png";
import thumbCovidTracker from "../public/images/works/covid-tracker.png";
import thumbExpTracker from "../public/images/works/expense-tracker.png";
import thumbInstaBot from "../public/images/works/insta-bot.png";
import thumbSweetsCloud from "../public/images/works/sweets-cloud.png";
import thumbTodo from "../public/images/works/todo.png";
import thumbWeatherApp from "../public/images/works/weather.png";

const sections = [
  {
    id: "professional",
    label: "Professional",
    blurb: "Products I built or maintain in production at work.",
    works: [
      {
        id: "nexoura-ai",
        title: "Nexoura AI",
        meta: "2026 · A&E",
        thumbnail: thumbNexoura,
        stack: ["Flutter", "ASP.NET Core", "MSSQL", "LLM"],
        description:
          "The company AI chatbot at American & Efird, with chat-based order tracking across country order APIs.",
      },
      {
        id: "ae-digital",
        title: "A&E Digital",
        meta: "2026 · A&E",
        thumbnail: thumbAeDigital,
        stack: ["Flutter", "ASP.NET Core", "MSSQL"],
        description:
          "Flutter product catalog and sales app with an admin panel and multi-country order entry. 100+ users in phase one.",
      },
      {
        id: "store-sales",
        title: "Store Sales",
        meta: "2025 · Neoscoder",
        thumbnail: thumbStoreSales,
        stack: ["NestJS", "MySQL"],
        description: "A SaaS platform for sales and inventory management.",
      },
      {
        id: "hris",
        title: "HRIS",
        meta: "2025 · Neoscoder",
        thumbnail: thumbHris,
        stack: ["NestJS", "MySQL"],
        description:
          "HR management system with role-based access and automated workflows.",
      },
      {
        id: "my-akij-takaful",
        title: "My Akij Takaful",
        meta: "2022 · Akij Takaful",
        thumbnail: thumbMyAkijTakaful,
        stack: ["Flutter", "ASP.NET", "MSSQL"],
        description: "A mobile app for Akij Takaful Life Insurance users.",
      },
      {
        id: "fair-value",
        title: "Fair Value",
        meta: "2024",
        thumbnail: thumbFairValue,
        stack: ["Flutter", "NestJS"],
        description: "Multi-vendor e-commerce app.",
      },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    blurb: "Side projects built on my own time.",
    works: [
      {
        id: "sweets-cloud",
        title: "Sweets Cloud",
        meta: "2022",
        thumbnail: thumbSweetsCloud,
        stack: ["ReactJS", "API"],
        description: "An e-commerce website for sweets.",
      },
      {
        id: "carpod",
        title: "CarPod",
        meta: "2020",
        thumbnail: thumbCarpod,
        stack: ["PHP", "Laravel", "MySQL"],
        description: "An online car showroom built on Laravel.",
      },
    ],
  },
  {
    id: "archive",
    label: "Archive",
    blurb: "Earlier projects, mostly from 2020 and 2021.",
    works: [
      {
        id: "covid-tracker",
        title: "Covid Tracker",
        meta: "2020",
        thumbnail: thumbCovidTracker,
        stack: ["ReactJS", "API"],
        description:
          "Covid statistics with worldwide and country-wise cases, recoveries and deaths.",
      },
      {
        id: "todo-app",
        title: "Todo App",
        meta: "2020",
        thumbnail: thumbTodo,
        stack: ["React Native", "Firebase"],
        description: "A todo app built with React Native.",
      },
      {
        id: "weather-app",
        title: "Weather App",
        meta: "2021",
        thumbnail: thumbWeatherApp,
        stack: ["React Native", "Firebase"],
        description: "A simple weather app built with React Native.",
      },
      {
        id: "expense-tracker",
        title: "Expense Tracker",
        meta: "2020",
        thumbnail: thumbExpTracker,
        stack: ["NodeJS", "ReactJS"],
        description: "An expense tracker built with React.",
      },
      {
        id: "insta-bot",
        title: "Instagram Bot",
        meta: "2021",
        thumbnail: thumbInstaBot,
        stack: ["Python"],
        description: "Finds Instagram non-followers and emails the list.",
      },
    ],
  },
];

const NAV_ITEMS = sections.map(({ id, label, works }) => ({
  id,
  label,
  count: works.length,
}));

const total = sections.reduce((sum, s) => sum + s.works.length, 0);

const Works = () => {
  const [active, setActive] = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const { accent, strong, muted, border, body } = usePalette();

  return (
    <Layout title="Works">
      <SplitLayout
        aside={
          <Stack spacing={7}>
            <Stack spacing={4}>
              <Text
                fontFamily={MONO}
                fontSize="12px"
                letterSpacing="0.1em"
                color={accent}
              >
                {String(total).padStart(2, "0")} PROJECTS · 2020 — NOW
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "38px", md: "46px" }}
                lineHeight={1.05}
                letterSpacing="-0.02em"
                fontWeight={800}
                color={strong}
              >
                Works
              </Heading>
              <Text fontSize="md" lineHeight={1.65} color={muted} maxW="340px">
                Mobile apps, backends and AI features I&apos;ve shipped across
                products, platforms and teams.
              </Text>
            </Stack>

            <SideNav
              items={NAV_ITEMS}
              active={active}
              onSelect={setActive}
              label="Work sections"
            />

            <Box>
              <NextLink href="/" passHref legacyBehavior>
                <Button
                  as="a"
                  variant="outline"
                  borderColor={border}
                  color={body}
                  borderRadius="10px"
                  h="44px"
                >
                  ← Back to home
                </Button>
              </NextLink>
            </Box>
          </Stack>
        }
      >
        {sections.map((section, i) => (
          <Section key={section.id} delay={0.1 + i * 0.05}>
            <Box
              as="section"
              id={section.id}
              scrollMarginTop={STICKY_TOP}
              mb={i < sections.length - 1 ? 16 : 0}
            >
              <SectionLabel mb={2}>{section.label}</SectionLabel>
              <Text fontSize="15px" color={muted} mb={6}>
                {section.blurb}
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
                {section.works.map((work) => (
                  <WorkGridItem
                    key={work.id}
                    id={work.id}
                    title={work.title}
                    meta={work.meta}
                    thumbnail={work.thumbnail}
                    stack={work.stack}
                  >
                    {work.description}
                  </WorkGridItem>
                ))}
              </SimpleGrid>
            </Box>
          </Section>
        ))}
      </SplitLayout>
    </Layout>
  );
};

export default Works;
