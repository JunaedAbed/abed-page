import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import thumbFairValue from "../public/images/links/fair_value.png";
import thumbMyAkijTakaful from "../public/images/links/my_akij_takaful.png";
import thumbCarpod from "../public/images/works/carpod.png";
import thumbCovidTracker from "../public/images/works/covid-tracker.png";
import thumbExpTracker from "../public/images/works/expense-tracker.png";
import thumbInstaBot from "../public/images/works/insta-bot.png";

import thumbScholarBot from "../public/images/works/scholar-bot.png";
import thumbSweetsCloud from "../public/images/works/sweets-cloud.png";
import thumbTodo from "../public/images/works/todo.png";
import thumbWeatherApp from "../public/images/works/weather.png";

const Works = () => {
  return (
    <Layout>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Box
          position="relative"
          overflow="hidden"
          mt={{ base: 2, md: 6 }}
          mb={10}
          p={{ base: 5, md: 8 }}
          borderRadius="34px"
          bg={useColorModeValue(
            "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(244,249,255,0.99) 55%, rgba(232,242,255,0.96) 100%)",
            "linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(17,24,39,0.92) 55%, rgba(15,23,42,0.90) 100%)"
          )}
          border="1px solid"
          borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          boxShadow={useColorModeValue(
            "0 24px 72px rgba(15, 23, 42, 0.12)",
            "0 24px 72px rgba(0, 0, 0, 0.34)"
          )}
        >
          <Box
            position="absolute"
            inset="auto -80px -90px auto"
            w="220px"
            h="220px"
            borderRadius="full"
            bg={useColorModeValue(
              "rgba(63, 140, 255, 0.18)",
              "rgba(96, 197, 255, 0.12)"
            )}
            filter="blur(18px)"
          />
          <Box
            position="absolute"
            inset="-70px auto auto -90px"
            w="200px"
            h="200px"
            borderRadius="full"
            bg={useColorModeValue(
              "rgba(45, 179, 163, 0.16)",
              "rgba(45, 179, 163, 0.14)"
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
                bg={useColorModeValue("brandBlue.100", "whiteAlpha.200")}
              >
                <TagLabel>Selected portfolio</TagLabel>
              </Tag>

              <Heading as="h2" fontSize={{ base: 30, md: 44 }} lineHeight={1.05}>
                Work I&apos;ve shipped across products, platforms, and teams.
              </Heading>
            </Box>

            <Box gridColumn={{ lg: "span 5" }} position="relative" zIndex={1}>
              <Box
                p={{ base: 4, md: 5 }}
                borderRadius="28px"
                bg={useColorModeValue("white", "whiteAlpha.100")}
                border="1px solid"
                borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                boxShadow={useColorModeValue(
                  "0 16px 40px rgba(15, 23, 42, 0.10)",
                  "0 16px 40px rgba(0, 0, 0, 0.22)"
                )}
              >
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                  fontSize="xs"
                  color={useColorModeValue("brandBlue.600", "teal.300")}
                  fontWeight="bold"
                >
                  Browse by section
                </Text>

                <Stack spacing={4} mt={4}>
                  <Link href="#professional-works" _hover={{ textDecoration: "none" }}>
                    <Flex
                      justify="space-between"
                      align="center"
                      px={3}
                      py={2}
                      borderRadius="16px"
                      bg={useColorModeValue("brandBlue.50", "whiteAlpha.100")}
                      border="1px solid"
                      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      transition="transform 0.2s ease, border-color 0.2s ease"
                      _hover={{ transform: "translateX(4px)", borderColor: "teal.300" }}
                    >
                      <Text fontWeight="semibold">Professional works</Text>
                      <Tag borderRadius="full" colorScheme="teal">
                        2
                      </Tag>
                    </Flex>
                  </Link>
                  <Link href="#personal-works" _hover={{ textDecoration: "none" }}>
                    <Flex
                      justify="space-between"
                      align="center"
                      px={3}
                      py={2}
                      borderRadius="16px"
                      bg={useColorModeValue("brandBlue.50", "whiteAlpha.100")}
                      border="1px solid"
                      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      transition="transform 0.2s ease, border-color 0.2s ease"
                      _hover={{ transform: "translateX(4px)", borderColor: "teal.300" }}
                    >
                      <Text fontWeight="semibold">Personal works</Text>
                      <Tag borderRadius="full" colorScheme="blue">
                        5
                      </Tag>
                    </Flex>
                  </Link>
                  <Link href="#old-works" _hover={{ textDecoration: "none" }}>
                    <Flex
                      justify="space-between"
                      align="center"
                      px={3}
                      py={2}
                      borderRadius="16px"
                      bg={useColorModeValue("brandBlue.50", "whiteAlpha.100")}
                      border="1px solid"
                      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      transition="transform 0.2s ease, border-color 0.2s ease"
                      _hover={{ transform: "translateX(4px)", borderColor: "teal.300" }}
                    >
                      <Text fontWeight="semibold">Older builds</Text>
                      <Tag borderRadius="full" colorScheme="cyan">
                        3
                      </Tag>
                    </Flex>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Heading id="professional-works" as="h3" fontSize={{ base: 20, md: 24 }} mb={5}>
          Professional Works
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap={6} alignItems="stretch">
          <Section delay={0.1}>
            <WorkGridItem
              id="my-akij-takaful"
              title="My Akij Takaful"
              thumbnail={thumbMyAkijTakaful}
            >
              A mobile app for Akij Takaful Life Insurance users.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="fair-value"
              title="Fair Value"
              thumbnail={thumbFairValue}
            >
              Multi-vendor e-commerce app.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading id="personal-works" as="h3" fontSize={{ base: 20, md: 24 }} mb={5}>
            Personal Works
          </Heading>
        </Section>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} alignItems="stretch">
          <Section delay={0.4}>
            <WorkGridItem
              id="sweets-cloud"
              title="Sweets Cloud"
              thumbnail={thumbSweetsCloud}
            >
              An e-commerce website for sweets.
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="covid-tracker"
              title="Covid Tracker"
              thumbnail={thumbCovidTracker}
            >
              A Covid Statistics app with worldwide and countrywise cases,
              recovered and deaths details.
            </WorkGridItem>
          </Section>

          <Section delay={0.6}>
            <WorkGridItem id="carpod" title="CarPod" thumbnail={thumbCarpod}>
              CarPod is an online car showroom. It is built on Laravel
              framework.
            </WorkGridItem>
          </Section>

          <Section delay={0.7}>
            <WorkGridItem id="todo-app" title="Todo App" thumbnail={thumbTodo}>
              A todo app built on React-Native framework.
            </WorkGridItem>
          </Section>

          <Section delay={0.8}>
            <WorkGridItem
              id="scholar-bot"
              title="Scholar Bot"
              thumbnail={thumbScholarBot}
            >
              A discord bot to Google search and to download thesis papers via
              Sci-Hub.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.9}>
          <Divider my={6} />

          <Heading id="old-works" as="h3" fontSize={{ base: 20, md: 24 }} mb={5}>
            Old Works
          </Heading>
        </Section>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} alignItems="stretch">
          <Section delay={0.9}>
            <WorkGridItem
              id="insta-bot"
              title="Instagram Bot"
              thumbnail={thumbInstaBot}
            >
              Instagram non-followers finder with email system.
            </WorkGridItem>
          </Section>

          <Section delay={0.9}>
            <WorkGridItem
              id="weather-app"
              title="Weather App"
              thumbnail={thumbWeatherApp}
            >
              It is a simple weather app built on React-Native framework.
            </WorkGridItem>
          </Section>

          <Section delay={0.9}>
            <WorkGridItem
              id="expense-tracker"
              title="Expense Tracker"
              thumbnail={thumbExpTracker}
            >
              Expense Tracker built on ReactJs framework.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
