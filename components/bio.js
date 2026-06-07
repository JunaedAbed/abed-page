import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BioSection = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.9rem 1rem;
  margin-bottom: 0.85rem;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
`;

export const BioYear = styled.span`
  flex: 0 0 auto;
  font-weight: bold;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.14);
  color: inherit;
`;
