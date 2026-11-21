import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import P from "../../components/paragraph";
import {
  Meta,
  Title,
  WorkDetailGrid,
  WorkImage,
  WorkImagePanel,
  WorkInfoPanel,
} from "../../components/work";

const Work = () => (
  <Layout title="Nexoura AI">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Nexoura AI <Badge>2026</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>
            Nexoura AI is the AI chatbot at American &amp; Efird (Bangladesh)
            Ltd.: an ASP.NET Core backend with Flutter companion apps on Android
            and iOS. I maintain it and ship new features end to end.
          </P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Company</Meta>
              <span>American &amp; Efird (Bangladesh) Ltd.</span>
            </ListItem>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Android, iOS</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Flutter, ASP.NET Core, MSSQL, LLM</span>
            </ListItem>
          </List>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Order tracking</Meta>
              <span>
                Customers ask about an order in plain language. The bot finds
                their customer codes, pulls out the order ID, calls the right
                country&apos;s order API and returns item status and invoice
                numbers.
              </span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/nexoura-ai.png" alt="Nexoura AI" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
