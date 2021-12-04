import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Covid Tracker">
    <Container>
      <Title>
        Covid Tracker <Badge>2020</Badge>
      </Title>
      <P>
        A Covid Statistics app with worldwide and countrywise cases, recovered
        and deaths details.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://covid-tracker-3ce38.web.app/">
            https://covid-tracker-3ce38.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/covid-tracker_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/covid-tracker_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
);

export default Work;
