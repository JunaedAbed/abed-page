import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.700", "whiteAlpha.800");
  const activeBg = useColorModeValue(
    "#0071e3",
    "linear-gradient(120deg, #0a84ff, #32d6c4)"
  );
  const hoverColor = useColorModeValue("#0071e3", "#5ec2ff");
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        px={3}
        py={2}
        fontWeight={600}
        fontSize="sm"
        bg={active ? activeBg : undefined}
        color={active ? "#ffffff" : inactiveColor}
        borderRadius="full"
        _hover={{ textDecoration: "none", color: active ? "#ffffff" : hoverColor }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("rgba(255,255,255,0.78)", "rgba(0,0,0,0.6)")}
      borderBottom="1px solid"
      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
      style={{ backdropFilter: "blur(20px) saturate(180%)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        px={{ base: 3, md: 4 }}
        py={3}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"} lineHeight={1}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/Md_Junaed_Abed_CV.pdf" path={path}>
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                size="sm"
              />
              <MenuList>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref legacyBehavior>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/Md_Junaed_Abed_CV.pdf" passHref legacyBehavior>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
