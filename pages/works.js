import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbCovidTracker from "../public/images/works/covid-tracker.png";
import thumbCarpod from "../public/images/works/carpod.png";
import thumbWeatherApp from "../public/images/works/weather.png";
import thumbTodo from "../public/images/works/todo.png";
import thumbExpTracker from "../public/images/works/expense-tracker.png";
import thumbScholarBot from "../public/images/works/scholar-bot.png";
import thumbInstaBot from "../public/images/works/insta-bot.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={22} mb={5}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="covid-tracker"
            title="Covid Tracker"
            thumbnail={thumbCovidTracker}
          >
            A Covid Statistics app with worldwide and countrywise cases,
            recovered and deaths details.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="carpod" title="CarPod" thumbnail={thumbCarpod}>
            CarPod is an online car showroom. It is built on Laravel framework.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="todo-app" title="Todo App" thumbnail={thumbTodo}>
            A todo app built on React-Native framework.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
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

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={22} mb={5}>
          Old Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="insta-bot"
            title="Instagram Bot"
            thumbnail={thumbInstaBot}
          >
            Instagram non-followers finder with email system.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
            id="weather-app"
            title="Weather App"
            thumbnail={thumbWeatherApp}
          >
            It is a simple weather app built on React-Native framework.
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
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
  );
};

export default Works;
