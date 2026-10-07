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
  <Layout title="Store Sales">
    <Container maxW="6xl" px={{ base: 4, md: 6 }}>
      <Title>
        Store Sales <Badge>2025</Badge>
      </Title>
      <WorkDetailGrid>
        <WorkInfoPanel>
          <P>
            A SaaS platform for sales and inventory management across multiple
            store locations.
          </P>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Company</Meta>
              <span>Neoscoder Ltd.</span>
            </ListItem>
            <ListItem>
              <Meta>Type</Meta>
              <span>SaaS, Backend</span>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>NestJS, MySQL</span>
            </ListItem>
          </List>
          <List ml={0} my={4} spacing={3}>
            <ListItem>
              <Meta>Modules</Meta>
              <span>
                Inventory Transfer, Inventory Damage (Return, Receive),
                Requisition, Voucher, Membership Point
              </span>
            </ListItem>
            <ListItem>
              <Meta>Stock accuracy</Meta>
              <span>
                Transactions and stored procedures keep stock consistent across
                locations
              </span>
            </ListItem>
            <ListItem>
              <Meta>Access control</Meta>
              <span>Role-based menu and menu action control</span>
            </ListItem>
            <ListItem>
              <Meta>Loyalty</Meta>
              <span>Membership points for customer engagement</span>
            </ListItem>
            <ListItem>
              <Meta>Maintenance</Meta>
              <span>Bug fixes and enhancements for production stability</span>
            </ListItem>
          </List>
        </WorkInfoPanel>
        <WorkImagePanel>
          <WorkImage src="/images/works/store-sales.png" alt="Store Sales" />
        </WorkImagePanel>
      </WorkDetailGrid>
    </Container>
  </Layout>
);

export default Work;
