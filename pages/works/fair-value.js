import { Badge, Container, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import P from "../../components/paragraph";
import {
  Meta,
  Title,
  WorkDetailGrid,
  WorkImageApp,
  WorkImagePanel,
  WorkInfoPanel,
} from "../../components/work";

const Work = () => (
  <Layout title="Fair Value">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Fair Value <Badge>2024</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>A Multi-vendor E-commerce App.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Android, iOS</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Flutter, NestJS</span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
            <WorkImageApp
              src="/images/works/fair_value_04.png"
              alt="fair_value_04"
            />
            <WorkImageApp
              src="/images/works/fair_value_01.png"
              alt="fair_value_01"
            />
            <WorkImageApp
              src="/images/works/fair_value_02.png"
              alt="fair_value_02"
            />
            <WorkImageApp
              src="/images/works/fair_value_03.png"
              alt="fair_value_03"
            />
            <WorkImageApp
              src="/images/works/fair_value_05.png"
              alt="fair_value_05"
            />
            <WorkImageApp
              src="/images/works/fair_value_06.png"
              alt="fair_value_06"
            />
            <WorkImageApp
              src="/images/works/fair_value_07.png"
              alt="fair_value_07"
            />
            <WorkImageApp
              src="/images/works/fair_value_08.png"
              alt="fair_value_08"
            />
            <WorkImageApp
              src="/images/works/fair_value_09.png"
              alt="fair_value_09"
            />
          </SimpleGrid>
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
