import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxButtons = styled(Box)`
  max-width: ${({ theme }) => theme.breakpoints.values.xs}px;
  margin: auto;
`;
