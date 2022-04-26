import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import VoxelDogLoader from "../voxel-dog-loader";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Abed's homepage" />
        <meta name="author" content="Junaed Abed" />
        <meta name="author" content="abed" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/junaed.png" type="image/x-icon" />
        <meta property="og:site_name" content="Abed's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <title>Abed - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
