import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Expense Tracker">
    <Container>
      <Title>
        Expense Tracker <Badge>2020</Badge>
      </Title>
      <P>Expense calculator.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://expense-tracker-amethyst.netlify.app/">
            https://expense-tracker-amethyst.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JunaedAbed/expense-tracker-react">
            Expense Tracker <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/expense-tracker.png"
        alt="Expense Tracker"
      />
    </Container>
  </Layout>
);

export default Work;
