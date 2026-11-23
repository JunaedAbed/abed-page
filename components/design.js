import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Shared design language for the split-layout pages (home, works, work details).

export const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

// Offset for the fixed navbar, used by sticky columns and anchor scrolling.
export const STICKY_TOP = "104px";

export const usePalette = () => ({
  accent: useColorModeValue("#0f766e", "#5eead4"),
  accentFg: useColorModeValue("#ffffff", "#0b1120"),
  chipBg: useColorModeValue("rgba(15,118,110,0.09)", "rgba(94,234,212,0.10)"),
  strong: useColorModeValue("gray.900", "gray.50"),
  body: useColorModeValue("gray.700", "gray.300"),
  muted: useColorModeValue("gray.600", "gray.400"),
  faint: useColorModeValue("gray.300", "gray.600"),
  border: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
  cardBg: useColorModeValue("white", "whiteAlpha.50"),
  cardHover: useColorModeValue("blackAlpha.300", "whiteAlpha.400"),
  mutedChipBg: useColorModeValue("blackAlpha.50", "whiteAlpha.100"),
});

// Small uppercase monospace label: section headings, dates, metadata keys.
export const MonoLabel = ({ children, ...props }) => {
  const { muted } = usePalette();
  return (
    <Text
      fontFamily={MONO}
      fontSize="12px"
      letterSpacing="0.1em"
      textTransform="uppercase"
      color={muted}
      {...props}
    >
      {children}
    </Text>
  );
};

export const SectionLabel = ({ children, ...props }) => {
  const { muted } = usePalette();
  return (
    <Heading
      as="h2"
      fontFamily={MONO}
      fontSize="13px"
      fontWeight={500}
      letterSpacing="0.12em"
      textTransform="uppercase"
      color={muted}
      mb={5}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const Chip = ({ children, isCore = true }) => {
  const { accent, chipBg, muted, mutedChipBg } = usePalette();
  return (
    <WrapItem>
      <Text
        as="span"
        fontSize="13px"
        fontWeight={isCore ? 600 : 500}
        px={3}
        py={1}
        borderRadius="full"
        color={isCore ? accent : muted}
        bg={isCore ? chipBg : mutedChipBg}
      >
        {children}
      </Text>
    </WrapItem>
  );
};

// Tracks which section is in the middle band of the viewport.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return [active, setActive];
};

// Section menu for the sticky sidebar. items: [{ id, label, count? }]
export const SideNav = ({
  items,
  active,
  onSelect,
  label = "Page sections",
}) => {
  const { accent, strong, muted, faint } = usePalette();
  return (
    <Box as="nav" aria-label={label} display={{ base: "none", lg: "block" }}>
      <Stack spacing={1}>
        {items.map(({ id, label: text, count }) => {
          const isActive = active === id;
          return (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => onSelect(id)}
              display="flex"
              alignItems="center"
              gap={4}
              minH="40px"
              fontSize="13px"
              fontWeight={600}
              letterSpacing="0.1em"
              textTransform="uppercase"
              color={isActive ? strong : muted}
              aria-current={isActive ? "true" : undefined}
              _hover={{ color: strong, textDecoration: "none" }}
            >
              <Box
                as="span"
                h="1px"
                w={isActive ? "64px" : "32px"}
                bg={isActive ? accent : faint}
                transition="width 0.2s ease, background 0.2s ease"
              />
              {text}
              {count !== undefined && (
                <Text
                  as="span"
                  fontFamily={MONO}
                  fontWeight={400}
                  color={muted}
                >
                  {String(count).padStart(2, "0")}
                </Text>
              )}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

// Two-column page shell: sticky aside on large screens, stacked on phones.
export const SplitLayout = ({ aside, children, asideWidth = "360px" }) => (
  <Box
    display="flex"
    flexDirection={{ base: "column", lg: "row" }}
    gap={{ base: 12, lg: 16 }}
    maxW="1200px"
    mx="auto"
    px={{ base: 0, md: 2 }}
    pt={{ base: 4, md: 8 }}
  >
    <Box
      as="aside"
      flex={{ lg: `0 0 ${asideWidth}` }}
      position={{ base: "static", lg: "sticky" }}
      top={{ lg: STICKY_TOP }}
      alignSelf="flex-start"
      w="full"
    >
      {aside}
    </Box>
    <Box flex="1" minW={0}>
      {children}
    </Box>
  </Box>
);
