import NextLink from "next/link";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

const useCardStyle = () => {
  const cardBg = useColorModeValue("white", "whiteAlpha.100");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const cardShadow = useColorModeValue(
    "0 18px 48px rgba(15, 23, 42, 0.10)",
    "0 18px 48px rgba(0, 0, 0, 0.24)"
  );

  return {
    h: "full",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    p: 4,
    borderRadius: "28px",
    bg: cardBg,
    border: "1px solid",
    borderColor: cardBorder,
    boxShadow: cardShadow,
    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    _hover: { transform: "translateY(-4px)", borderColor: "teal.300" },
  };
};

const TitleText = ({ children }) => (
  <Text mt={4} fontSize="lg" fontWeight="semibold" lineHeight={1.2}>
    {children}
  </Text>
);

const DescriptionText = ({ children }) => (
  <Text
    mt={2}
    fontSize={14}
    color={useColorModeValue("gray.600", "gray.400")}
    minH="3.5em"
  >
    {children}
  </Text>
);

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="left">
    <LinkBox {...useCardStyle()}>
      <AspectRatio ratio={16 / 10} w="full" overflow="hidden">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </AspectRatio>
      <LinkOverlay href={href} target="_blank">
        <TitleText>{title}</TitleText>
      </LinkOverlay>
      <DescriptionText>{children}</DescriptionText>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="left">
    <NextLink href={`/works/${id}`} legacyBehavior>
      <LinkBox {...useCardStyle()}>
        <AspectRatio ratio={16 / 10} w="full" overflow="hidden">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            style={{ objectFit: "cover" }}
          />
        </AspectRatio>
        <LinkOverlay href={`/works/${id}`}>
          <TitleText>{title}</TitleText>
        </LinkOverlay>
        <DescriptionText>{children}</DescriptionText>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 16px;
      }
    `}
  />
);
