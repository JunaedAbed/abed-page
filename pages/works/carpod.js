import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
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
  <Layout title="CarPod">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        CarPod <Badge>2020</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>CarPod is an online car showroom.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Web Browser</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>PHP, Laravel, MySQL</span>
            </ListItem>
            <ListItem>
              <Meta>Github</Meta>
              <Link href="https://github.com/JunaedAbed/carPod">
                CarPod <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <AspectRatio ratio={1.7} mt={4} borderRadius="16px" overflow="hidden">
            <iframe
              src="https://www.youtube.com/embed/hBWNRwZD2iI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/carpod.png" alt="CarPod" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
