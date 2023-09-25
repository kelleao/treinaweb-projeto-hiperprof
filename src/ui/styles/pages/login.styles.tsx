import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxButtons = styled("div")`
  max-width: ${({ theme }) => theme.breakpoints.values.xs}px;
`;

export const ButtonRecAccount = styled(Button)`
  &.MuiButton-root {
    text-decoration: underline;
  }
`;
