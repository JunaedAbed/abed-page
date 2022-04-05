import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Sweets Cloud">
    <Container>
      <Title>
        Sweets Cloud <Badge>2022</Badge>
      </Title>
      <P>An e-commerce website for sweets.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sweets-cloud.com">
            https://sweets-cloud.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, API</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JunaedAbed/sweets-cloud">
            Sweets-cloud <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sweets-cloud_01.png" alt="sweets-cloud01" />
      <WorkImage src="/images/works/sweets-cloud_02.png" alt="sweets-cloud02" />
      <WorkImage src="/images/works/sweets-cloud_03.png" alt="sweets-cloud03" />
      <WorkImage src="/images/works/sweets-cloud_04.png" alt="sweets-cloud04" />
    </Container>
  </Layout>
);

export default Work;
