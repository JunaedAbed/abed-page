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
  <Layout title="A&E Digital">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        A&amp;E Digital <Badge>2026</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>
            A Flutter product catalog and sales app with an admin panel. It has
            100+ users in its first phase and is built for global rollout: live
            in Bangladesh, with Europe next.
          </P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Company</Meta>
              <span>American &amp; Efird (Bangladesh) Ltd.</span>
            </ListItem>
            <ListItem>
              <Meta>Platform</Meta>
              <span>Mobile, Admin panel</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Flutter, ASP.NET Core, MSSQL</span>
            </ListItem>
          </List>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Order entry</Meta>
              <span>
                Multi-country sales order entry, now live, with per-country
                screens and API routing, draft and confirmed order states, and
                an approval workflow with a dedicated approver role and email
                notifications.
              </span>
            </ListItem>
            <ListItem>
              <Meta>Auth</Meta>
              <span>
                JWT guest auth with refresh tokens, shared by the mobile and web
                clients, on a backend restructured into feature modules.
              </span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/ae-digital.png" alt="A&E Digital" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
