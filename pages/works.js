import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
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
      <Container>
        <Heading as="h3" fontSize={22} mb={5}>
          Professional Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
          <Heading as="h3" fontSize={22} mb={5}>
            Personal Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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

          <Heading as="h3" fontSize={22} mb={5}>
            Old Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
