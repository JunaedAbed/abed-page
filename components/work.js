import { Box, Grid, Heading, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MONO, MonoLabel, STICKY_TOP, usePalette } from "./design";

// Page header: back link to /works and the project name. A <Badge> passed
// as a child (the year) is restyled as a mono accent chip.
export const Title = ({ children }) => {
  const { accent, chipBg, strong, muted } = usePalette();
  return (
    <Box mb={{ base: 8, md: 12 }} pt={{ base: 4, md: 8 }}>
      <NextLink href="/works" passHref legacyBehavior>
        <Link
          fontFamily={MONO}
          fontSize="12px"
          letterSpacing="0.1em"
          textTransform="uppercase"
          color={muted}
          display="inline-flex"
          alignItems="center"
          minH="44px"
          _hover={{ color: strong, textDecoration: "none" }}
        >
          ← All works
        </Link>
      </NextLink>
      <Heading
        as="h1"
        mt={2}
        fontSize={{ base: "34px", md: "46px" }}
        lineHeight={1.08}
        letterSpacing="-0.02em"
        fontWeight={800}
        color={strong}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        columnGap={4}
        rowGap={2}
        sx={{
          ".chakra-badge": {
            fontFamily: MONO,
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "none",
            color: accent,
            bg: chipBg,
            px: 3,
            py: 1,
            borderRadius: "full",
          },
        }}
      >
        {children}
      </Heading>
    </Box>
  );
};

const useImageStyle = () => {
  const { border } = usePalette();
  return {
    borderRadius: "16px",
    w: "full",
    border: "1px solid",
    borderColor: border,
  };
};

export const WorkImage = ({ src, alt }) => (
  <Image {...useImageStyle()} src={src} alt={alt} />
);

export const WorkImageApp = ({ src, alt }) => (
  <Image {...useImageStyle()} src={src} alt={alt} />
);

// Two columns like the home page: details on the left (sticky on large
// screens), screenshots on the right.
export const WorkDetailGrid = ({ children }) => (
  <Grid
    templateColumns={{ base: "1fr", lg: "360px minmax(0, 1fr)" }}
    gap={{ base: 10, lg: 16 }}
    alignItems="start"
    pb={8}
  >
    {children}
  </Grid>
);

export const WorkInfoPanel = ({ children }) => {
  const { body, strong, border, accent } = usePalette();
  return (
    <Box
      position={{ base: "static", lg: "sticky" }}
      top={{ lg: STICKY_TOP }}
      color={body}
      fontSize="15px"
      lineHeight={1.65}
      sx={{
        "> p": {
          fontSize: "17px",
          lineHeight: 1.7,
          textAlign: "left",
          color: strong,
          marginBottom: 6,
        },
        "ul > li": {
          py: 3,
          borderTop: "1px solid",
          borderColor: border,
          overflowWrap: "anywhere",
        },
        "ul + ul": { mt: 0 },
        "ul:last-of-type > li:last-of-type": {
          borderBottom: "1px solid",
          borderColor: border,
        },
        "ul > li a": { color: accent, fontWeight: 500 },
      }}
    >
      {children}
    </Box>
  );
};

export const WorkImagePanel = ({ children }) => (
  <Box display="flex" flexDirection="column" gap={5} minW={0}>
    {children}
  </Box>
);

// Metadata key shown above its value, e.g. "STACK" over "Flutter, MSSQL".
export const Meta = ({ children }) => (
  <MonoLabel as="span" display="block" fontSize="11px" mb={1}>
    {children}
  </MonoLabel>
);
