import NextLink from "next/link";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { Chip, MonoLabel, usePalette } from "./design";

const useCardStyle = () => {
  const { border, cardBg, cardHover } = usePalette();

  return {
    h: "full",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    p: 3,
    borderRadius: "16px",
    bg: cardBg,
    border: "1px solid",
    borderColor: border,
    transition: "transform 0.2s ease, border-color 0.2s ease",
    _hover: { transform: "translateY(-3px)", borderColor: cardHover },
  };
};

const TitleText = ({ children, mt = 4 }) => {
  const { strong } = usePalette();
  return (
    <Text
      mt={mt}
      px={2}
      fontSize="17px"
      fontWeight={600}
      lineHeight={1.3}
      color={strong}
    >
      {children}
    </Text>
  );
};

const DescriptionText = ({ children }) => {
  const { muted } = usePalette();
  return (
    <Text mt={1} px={2} pb={2} fontSize="14px" lineHeight={1.6} color={muted}>
      {children}
    </Text>
  );
};

const MetaText = ({ children }) =>
  children ? (
    <MonoLabel mt={4} px={2} fontSize="11px">
      {children}
    </MonoLabel>
  ) : null;

const StackTags = ({ stack }) =>
  stack && stack.length ? (
    <Wrap spacing={2} mt="auto" pt={2} px={2} pb={2}>
      {stack.map((tech) => (
        <Chip key={tech}>{tech}</Chip>
      ))}
    </Wrap>
  ) : null;

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

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  stack,
  meta,
}) => (
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
        <MetaText>{meta}</MetaText>
        <LinkOverlay href={`/works/${id}`}>
          <TitleText mt={meta ? 1 : 4}>{title}</TitleText>
        </LinkOverlay>
        <DescriptionText>{children}</DescriptionText>
        <StackTags stack={stack} />
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 10px;
      }
    `}
  />
);
