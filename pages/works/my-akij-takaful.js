import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
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
  <Layout title="My Akij Takaful">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        My Akij Takaful <Badge>2022</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>A mobile app for Akij Takaful Life Insurance users.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Play Store</Meta>
              <Link
                href="https://play.google.com/store/apps/details?id=com.akijtakafullife.myAkijTakaful"
                target="_blank"
              >
                Google Play Store
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Android, iOS</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Flutter, API from ERP using ASP.NET</span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <SimpleGrid columns={2} spacing={4}>
            <WorkImageApp
              src="/images/works/my-akij-takaful_06.png"
              alt="my-akij-takaful06"
            />
            <WorkImageApp
              src="/images/works/my-akij-takaful_02.png"
              alt="my-akij-takaful02"
            />
            <WorkImageApp
              src="/images/works/my-akij-takaful_05.png"
              alt="my-akij-takaful05"
            />
            <WorkImageApp
              src="/images/works/my-akij-takaful_04.png"
              alt="my-akij-takaful04"
            />
          </SimpleGrid>
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
