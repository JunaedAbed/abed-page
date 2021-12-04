import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="carpod">
    <Container>
      <Title>
        CarPod <Badge>2020</Badge>
      </Title>
      <P>CarPod is an online car showroom.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/carpod.png" alt="Inkdrop" />
    </Container>
  </Layout>
);

export default Work;
