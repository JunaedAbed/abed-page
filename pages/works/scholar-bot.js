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
  <Layout title="Scholar Bot">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Scholar Bot <Badge>2021</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>
            A discord bot to Google search and to download thesis papers via
            Sci-Hub.
          </P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Discord</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Python</span>
            </ListItem>
            <ListItem>
              <Meta>Github</Meta>
              <Link href="https://github.com/JunaedAbed/Scholar-Bot">
                Scholar Bot <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/scholar-bot.png" alt="Scholar Bot" />
          <WorkImage src="/images/works/scholar-bot_01.png" alt="Scholar Bot" />
          <WorkImage src="/images/works/scholar-bot_02.png" alt="Scholar Bot" />
          <WorkImage src="/images/works/scholar-bot_03.png" alt="Scholar Bot" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
