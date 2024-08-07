import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(25deg);
  }
`;

const Logo = () => {
  const fishImg = `/images/fish${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/" legacyBehavior>

        <LogoBox>
          <Image src={fishImg} width={25} height={25} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Junaed Abed
          </Text>
        </LogoBox>

      </Link>
  );
};

export default Logo;
