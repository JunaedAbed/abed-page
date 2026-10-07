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
  <Layout title="HRIS">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        HRIS <Badge>2025</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>An HR management system with role-based access and automated HR workflows.</P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Company</Meta>
              <span>Neoscoder Ltd.</span>
            </ListItem>
            <ListItem>
              <Meta>Type</Meta>
              <span>HR Management, Backend</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>NestJS, MySQL</span>
            </ListItem>
          </List>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Modules</Meta>
              <span>Movement, Menu Permission &amp; Action, TADA, Letter Dispatch</span>
            </ListItem>
            <ListItem>
              <Meta>Access control</Meta>
              <span>Role-based access control across modules</span>
            </ListItem>
            <ListItem>
              <Meta>Automation</Meta>
              <span>Core HR workflows automated to improve efficiency</span>
            </ListItem>
            <ListItem>
              <Meta>Performance</Meta>
              <span>Optimized database queries for scalability</span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/hris.png" alt="HRIS" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
