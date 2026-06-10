import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Title,
  WorkImage,
  WorkDetailGrid,
  WorkInfoPanel,
  WorkImagePanel,
  Meta,
} from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Instagram Bot">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Instagram Bot <Badge>2021</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>A Python script to find non-followers through email system.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Web browser</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Python</span>
            </ListItem>
            <ListItem>
              <Meta>Github</Meta>
              <Link href="https://github.com/JunaedAbed/non-followers-instagram">
                Instagram Bot <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/insta-bot.png" alt="Insta Bot" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
