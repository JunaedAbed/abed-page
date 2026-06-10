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
  <Layout title="Sweets Cloud">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Sweets Cloud <Badge>2022</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>An e-commerce website for sweets.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://www.sweetscloudbd.com" target="_blank">
                https://www.sweetscloudbd.com
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
              <Link
                href="https://github.com/JunaedAbed/sweets-cloud"
                target="_blank"
              >
                Sweets-cloud <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage
            src="/images/works/sweets-cloud_01.png"
            alt="sweets-cloud01"
          />
          <WorkImage
            src="/images/works/sweets-cloud_03.png"
            alt="sweets-cloud03"
          />
          <WorkImage
            src="/images/works/sweets-cloud_04.png"
            alt="sweets-cloud04"
          />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
