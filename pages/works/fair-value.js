import { Badge, Container, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import P from "../../components/paragraph";
import { Meta, Title, WorkImageApp } from "../../components/work";

const Work = () => (
  <Layout title="Fair Value">
    <Container>
      <Title>
        Fair Value <Badge>2024</Badge>
      </Title>
      <P>A Multi-vendor E-commerce App.</P>
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Play Store</Meta>
          <Link
            // href="https://play.google.com/store/apps/details?id=com.akijtakafullife.myAkijTakaful"
            target="_blank"
          >
            Google Play Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Apple Store</Meta>
          <Link
            // href="https://play.google.com/store/apps/details?id=com.akijtakafullife.myAkijTakaful"
            target="_blank"
          >
            Apple App Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, NestJS</span>
        </ListItem>
      </List>

      <SimpleGrid columns={[1, 3]} spacing={4} mt={4}>
        <WorkImageApp
          src="/images/works/fair_value_04.png"
          alt="fair_value_04"
        />
        <WorkImageApp
          src="/images/works/fair_value_01.png"
          alt="fair_value_01"
        />
        <WorkImageApp
          src="/images/works/fair_value_02.png"
          alt="fair_value_02"
        />
        <WorkImageApp
          src="/images/works/fair_value_03.png"
          alt="fair_value_03"
        />
        <WorkImageApp
          src="/images/works/fair_value_05.png"
          alt="fair_value_05"
        />
        <WorkImageApp
          src="/images/works/fair_value_06.png"
          alt="fair_value_06"
        />
        <WorkImageApp
          src="/images/works/fair_value_07.png"
          alt="fair_value_07"
        />
        <WorkImageApp
          src="/images/works/fair_value_08.png"
          alt="fair_value_08"
        />
        <WorkImageApp
          src="/images/works/fair_value_09.png"
          alt="fair_value_09"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
