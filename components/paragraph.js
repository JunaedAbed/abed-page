import styled from "@emotion/styled";

const Paragraph = styled.p`
  line-height: 1.8;
  text-align: left;

  @media (min-width: 48em) {
    text-align: justify;
  }
`;

export default Paragraph;
