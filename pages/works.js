import { Container, Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbCovidTracker from "../public/images/works/covid-tracker.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="covid-tracker"
            title="Covid Tracker"
            thumbnail={thumbCovidTracker}
          >
            A Covid Statistics app with worldwide and countrywise cases,
            recovered and deaths details
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
