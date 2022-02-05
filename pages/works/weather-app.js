import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Weather App">
    <Container>
      <Title>
        Weather App <Badge>2021</Badge>
      </Title>
      <P>
        A weather app that shows current temperature, weather type and location
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JunaedAbed/weather-app-react-native">
            Weather App <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/weather.png" alt="Weather App" />
      <WorkImage src="/images/works/weather_01.png" alt="Weather App" />
      <WorkImage src="/images/works/weather_02.png" alt="Weather App" />
    </Container>
  </Layout>
);

export default Work;
