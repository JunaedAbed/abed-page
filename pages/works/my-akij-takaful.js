import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="My Akij Takaful">
    <Container>
      <Title>
        My Akij Takaful <Badge>2022</Badge>
      </Title>
      <P>A mobile app for Akij Takaful Life Insurance users.</P>
      <List ml={4} my={4}>
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
          <span>Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, API from ERP using ASP.NET</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/JunaedAbed/sweets-cloud"
            target="_blank"
          >
            Sweets-cloud <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage
        src="/images/works/my-akij-takaful_01.png"
        alt="my-akij-takaful01"
      />
      <WorkImage
        src="/images/works/my-akij-takaful_02.png"
        alt="my-akij-takaful03"
      />
      <WorkImage
        src="/images/works/my-akij-takaful_03.png"
        alt="my-akij-takaful04"
      />
    </Container>
  </Layout>
);

export default Work;
